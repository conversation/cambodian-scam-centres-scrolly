gsap.registerPlugin(ScrollTrigger);

function createScrollFades() {
  gsap.utils.toArray(".pinned_section").forEach((pinnedSection) => {
    const bgArr = pinnedSection.querySelector(".pinned_media").children;

    const parTriggersArr = pinnedSection.querySelectorAll(".step");

    parTriggersArr.forEach((par, index) => {
      ScrollTrigger.create({
        fastScrollEnd: true,
        trigger: par,
        start: `top ${par.classList.contains("delay") ? "70" : "90"}%`,
        onEnter: () => {
          bgArr[par.dataset.imageIndex || index + 1].classList.add(
            "make_visible"
          );
        },
        onLeaveBack: () => {
          bgArr[par.dataset.imageIndex || index + 1].classList.remove(
            "make_visible"
          );
        },
      });
    });
  });
}

async function buildMap(width, height) {
  const colours = {
    land: "#fff",
    ocean: "#a4cbe8",
    borders: "#aaa",
    ice: "#fff",
    sphereStroke: "#000",
    arc: "#FF0000",
    text: "#000",
  };

  let urls = [
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json",
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json",
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-10m.json",
  ];

  const promises = urls.map((url) => d3.json(url));
  const routeData = await d3.json("./assets/routingData_1.json");

  const [world110, world50, world10] = await Promise.all(promises);

  world10.objects.countries.geometries =
    world10.objects.countries.geometries.filter(
      (country) =>
        country.properties.name === "Myanmar" ||
        country.properties.name === "Cambodia" ||
        country.properties.name === "Thailand" ||
        country.properties.name === "Laos" ||
        country.properties.name === "India" ||
        country.properties.name === "Malaysia" ||
        country.properties.name === "Indonesia" ||
        country.properties.name === "Vietnam" ||
        country.properties.name === "Bangladesh" ||
        country.properties.name === "Bhutan" ||
        country.properties.name === "Nepal" ||
        country.properties.name === "China"
    );

  const mapHiRes = topojson.feature(world10, world10.objects.countries);
  const mapLowRes = topojson.feature(world110, world110.objects.countries);

  const bordersHiRes = topojson.mesh(
    world10,
    world10.objects.countries,
    (a, b) => a !== b
  );
  const bordersLowRes = topojson.mesh(
    world110,
    world110.objects.countries,
    (a, b) => a !== b
  );

  let allArcs = [];

  // Prepare a canvas.
  const canvas = d3
    .select(".globe_wrapper")
    .append("canvas")
    .attr("id", "globe")
    .attr("width", width)
    .attr("height", height);
  // .style("width", `${width}px`);
  const context = canvas.node().getContext("2d");

  // Create a projection and a path generator.
  const projection = d3
    .geoOrthographic()
    .fitExtent(
      [
        [0, 0],
        [width, height],
      ],
      { type: "Sphere" }
    )
    .rotate([
      -routeData[0].latLon[1],
      -routeData[0].latLon[0],
      routeData[0].rotation,
    ]);

  const path = d3.geoPath(projection, context);

  function render({
    newArc,
    reverse = false,
    arcLabel = null,
    highRes = true,
  }) {
    context.clearRect(0, 0, width, height);

    // Draw the sphere outline for clipping
    context.beginPath();
    path({ type: "Sphere" });
    context.closePath();

    // Save the current context state before applying the clipping path
    context.save();

    // Use the sphere as a clipping path
    context.clip();

    // Fill the canvas with the ocean color; this will fill only outside the sphere due to clipping
    context.fillStyle = colours.ocean;
    context.fillRect(0, 0, width, height);

    // Restore the context to remove the clipping path
    context.restore();

    // Draw the land
    context.beginPath(),
      path(highRes ? mapHiRes : mapLowRes),
      (context.fillStyle = colours.land),
      context.fill();

    // Step 4: Draw the borders
    context.beginPath(),
      path(highRes ? bordersHiRes : bordersLowRes),
      (context.strokeStyle = colours.borders),
      (context.lineWidth = 0.5),
      context.stroke();

    // Determine the number of arcs to draw based on the reverse flag
    const arcsToDraw = reverse ? allArcs.length - 1 : allArcs.length;

    // Draw arcs up to the determined number
    for (let i = 0; i < arcsToDraw; i++) {
      const arc = allArcs[i];
      const arcInterpolation = d3.geoInterpolate(arc[0], arc[1]);
      const arcPath = {
        type: "LineString",
        coordinates: [arc[0], arcInterpolation(1)],
      };
      context.beginPath(),
        path(arcPath),
        (context.strokeStyle = colours.arc),
        (context.lineWidth = 2),
        context.stroke();
    }

    // If there's a new arc and not in reverse, draw it
    if (newArc) {
      context.beginPath(),
        path(newArc),
        (context.strokeStyle = colours.arc),
        (context.lineWidth = 2),
        context.stroke();

      if (arcLabel && arcLabel.text && arcLabel.coordinates) {
        // Project the endpoint to screen coordinates
        const endpointScreen = projection(arcLabel.coordinates);

        // Draw the text at the projected endpoint
        context.fillStyle = colours.text; // Set text color
        context.font = "14px Arial"; // Set font properties as needed
        context.fillText(
          arcLabel.text,
          endpointScreen[0] + 10,
          endpointScreen[1]
        );
      }
    }
  }

  async function moveTo({ latLon, targetScale }) {
    // Interrupt any active transition
    d3.select("#globe").interrupt();

    const currentRotation = projection.rotate();
    const currentScale = projection.scale();
    const targetRotation = [-latLon[0], -latLon[1], 0];

    const rotateInterpolate = d3.interpolate(currentRotation, targetRotation);
    const scaleInterpolate = d3.interpolate(
      currentScale,
      targetScale || currentScale
    );

    try {
      await d3
        .transition()
        .duration(1250)
        .tween("rotate", function () {
          return function (t) {
            projection.rotate(rotateInterpolate(t));
            if (targetScale) {
              projection.scale(scaleInterpolate(t));
            }
            render({});
          };
        })
        .end();
    } catch (error) {}
  }

  async function moveToWithArc({
    nextlatLon,
    prevlatLon,
    targetScale,
    text,
    date,
    reverse = false,
    rotation = 0,
    highRes = true,
  }) {
    // Interrupt any active transition to ensure we start fresh
    d3.select("#globe").interrupt();

    const currentRotation = projection.rotate();
    const currentScale = projection.scale();

    const targetRotation = [-nextlatLon[1], -nextlatLon[0], rotation];

    const rotateInterpolate = d3.interpolate(currentRotation, targetRotation);
    const scaleInterpolate = d3.interpolate(
      currentScale,
      targetScale || currentScale
    );

    // Interpolation between points for arc
    const arcInterpolate = d3.geoInterpolate(prevlatLon, nextlatLon);

    try {
      await d3
        .transition()
        .duration(1000)
        .tween("render", () => (t) => {
          projection.rotate(rotateInterpolate(t));

          if (targetScale) {
            projection.scale(scaleInterpolate(t));
          }

          render({
            newArc: {
              type: "LineString",
              coordinates: reverse
                ? [arcInterpolate(t), nextlatLon]
                : [prevlatLon, arcInterpolate(t)],
            },
            reverse: reverse,
            highRes: highRes,
            arcLabel: {
              text: text,
              coordinates: nextlatLon,
            },
          });
        })
        .end();
    } catch (error) {
    } finally {
      if (!reverse) {
        allArcs.push([prevlatLon, nextlatLon]); // Add the new arc definition
      } else {
        // For reverse, you might want to handle it differently, depending on your needs
        allArcs.pop();
      }
    }
  }

  render({
    highRes: false,
  });

  // Continuously update the globe rotation
  const initialRotation = projection.rotate();
  const rotationSpeed = 0.5; // Adjust rotation speed here

  const rotationTimer = d3.timer(function (elapsed) {
    const lambda = initialRotation[0] + (rotationSpeed * elapsed) / 100;
    projection.rotate([lambda, initialRotation[1], initialRotation[2]]);
    render({ highRes: false }); // Redraw the globe with updated rotation
  });

  // gsap.utils.toArray(".chapter").forEach((chapter, index) => {
  //   ScrollTrigger.create({
  //     fastScrollEnd: true,
  //     trigger: chapter,
  //     start: `top ${index < 1 ? "50" : "90"}%`,
  //     markers: true,
  //     onEnter: () => {
  //       rotationTimer.stop();

  //       moveToWithArc({
  //         nextlatLon: routeData[index].latLon,
  //         prevlatLon: routeData[index < 1 ? 0 : index - 1].latLon,
  //         text: routeData[index].note,
  //         date: routeData[index].date,
  //         targetScale: routeData[index].zoom,
  //         rotation: index > 4 ? 180 : 0,
  //         highRes: true,
  //       });
  //     },
  //     onLeaveBack: () => {
  //       moveToWithArc({
  //         nextlatLon: routeData[index < 1 ? 0 : index - 1].latLon,
  //         prevlatLon: routeData[index].latLon,
  //         text: routeData[index < 1 ? 0 : index - 1].note,
  //         date: routeData[index < 1 ? 0 : index - 1].date,
  //         reverse: true,
  //         targetScale: routeData[index].zoom,
  //         rotation: routeData[index].rotation,
  //         highRes: true,
  //       });
  //     },
  //   });
  // });
}

async function buildMap2(width, height) {
  const colours = {
    land: "#fff",
    ocean: "#d7eef4",
    borders: "#333",
    ice: "#fff",
    sphereStroke: "#000",
    arc: "#FF0000",
    text: "#000",
  };

  let urls = [
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json",
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json",
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-10m.json",
  ];

  const promises = urls.map((url) => d3.json(url));
  const routeData = await d3.json("./assets/routingData_1.json");

  const [world110, world50, world10] = await Promise.all(promises);

  world10.objects.countries.geometries =
    world10.objects.countries.geometries.filter(
      (country) =>
        country.properties.name === "Myanmar" ||
        country.properties.name === "Cambodia" ||
        country.properties.name === "Thailand" ||
        country.properties.name === "Laos" ||
        country.properties.name === "India" ||
        country.properties.name === "Malaysia" ||
        country.properties.name === "Indonesia" ||
        country.properties.name === "Vietnam" ||
        country.properties.name === "Bangladesh" ||
        country.properties.name === "Bhutan" ||
        country.properties.name === "Nepal" ||
        country.properties.name === "China"
    );

  const mapHiRes = topojson.feature(world10, world10.objects.countries);
  const mapLowRes = topojson.feature(world110, world110.objects.countries);

  const bordersHiRes = topojson.mesh(
    world10,
    world10.objects.countries,
    (a, b) => a !== b
  );
  const bordersLowRes = topojson.mesh(
    world110,
    world110.objects.countries,
    (a, b) => a !== b
  );

  let allArcs = [];

  const sensitivity = 75;

  let projection = d3
    .geoOrthographic()
    .scale(250)
    .center([0, 0])
    .rotate([0, -30])
    .translate([width / 2, height / 2]);

  const initialScale = projection.scale();
  let path = d3.geoPath().projection(projection);

  let svg = d3
    .select(".globe_wrapper")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  let globe = svg
    .append("circle")
    .attr("class", "globe_layer")
    .attr("stroke", "#000")
    .attr("stroke-width", "0.2")
    .attr("cx", width / 2)
    .attr("cy", height / 2)
    .attr("r", initialScale);

  // svg
  //   .call(
  //     d3.drag().on("drag", (event) => {
  //       const rotate = projection.rotate();
  //       const k = sensitivity / projection.scale();
  //       projection.rotate([rotate[0] + event.dx * k, rotate[1] - event.dy * k]);
  //       path = d3.geoPath().projection(projection);
  //       svg.selectAll("path").attr("d", path);
  //     })
  //   )
  //   .call(
  //     d3.zoom().on("zoom", (event) => {
  //       if (event.transform.k > 0.3) {
  //         projection.scale(initialScale * event.transform.k);
  //         path = d3.geoPath().projection(projection);
  //         svg.selectAll("path").attr("d", path);
  //         globe.attr("r", projection.scale());
  //       } else {
  //         event.transform.k = 0.3;
  //       }
  //     })
  //   );

  svg
    .append("g")
    .attr("class", "countries")
    .selectAll("path")
    .data(mapLowRes.features)
    .enter()
    .append("path")
    .attr("class", (d) => "country_" + d.properties.name.replace(" ", "_"))
    .attr("d", path)
    .style("stroke-width", 0.3);

  //Optional rotate
  const rotationTimer = d3.timer(function (elapsed) {
    const rotate = projection.rotate();
    const k = 0.1;
    // const k = sensitivity / projection.scale();
    projection.rotate([rotate[0] - 1 * k, rotate[1]]);
    path = d3.geoPath().projection(projection);
    svg.selectAll("path").attr("d", path);
  }, 1);

  // gsap.utils.toArray(".chapter").forEach((chapter, index) => {
  //   ScrollTrigger.create({
  //     fastScrollEnd: true,
  //     trigger: chapter,
  //     start: `top ${index < 1 ? "50" : "90"}%`,
  //     markers: true,
  //     onEnter: () => {
  //       rotationTimer.stop();

  //       projection.rotate(routeData[index].latLon);
  //       path = d3.geoPath().projection(projection);
  //       svg.selectAll("path").attr("d", path);

  //       // moveToWithArc({
  //       //   nextlatLon: routeData[index].latLon,
  //       //   prevlatLon: routeData[index < 1 ? 0 : index - 1].latLon,
  //       //   text: routeData[index].note,
  //       //   date: routeData[index].date,
  //       //   targetScale: routeData[index].zoom,
  //       //   rotation: index > 4 ? 180 : 0,
  //       //   highRes: true,
  //       // });
  //     },
  //     onLeaveBack: () => {
  //       moveToWithArc({
  //         nextlatLon: routeData[index < 1 ? 0 : index - 1].latLon,
  //         prevlatLon: routeData[index].latLon,
  //         text: routeData[index < 1 ? 0 : index - 1].note,
  //         date: routeData[index < 1 ? 0 : index - 1].date,
  //         reverse: true,
  //         targetScale: routeData[index].zoom,
  //         rotation: routeData[index].rotation,
  //         highRes: true,
  //       });
  //     },
  //   });
  // });
}

document.addEventListener("DOMContentLoaded", () => {
  // Lazy load videos
  new LazyLoad({
    threshold: 800,
  });

  createScrollFades();

  let globeWrapper = document.querySelector(".globe_wrapper");
  buildMap(globeWrapper.clientWidth, globeWrapper.clientWidth);

  document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
    img.addEventListener("load", function () {
      ScrollTrigger.refresh();
    });
  });
});
