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

function createPigButchering() {
  const pinnedSection = document.querySelector(".pig_butchering");
  const mobileWrapper = pinnedSection.querySelector(".mobile_phone_wrapper");
  const bgArr = mobileWrapper.children;
  const parTriggersArr = pinnedSection.querySelectorAll(".next");

  parTriggersArr.forEach((par, index) => {
    let textPadding = window.getComputedStyle(par).paddingTop;
    let start, stop;
    if (window.innerWidth < 599) {
      start = `top bottom`;
      end = `center ${
        window.innerHeight -
        (window.innerHeight - mobileWrapper.clientHeight) / 2
      }`;
    } else {
      start = `top ${
        (window.innerHeight - mobileWrapper.clientHeight) / 2 +
        mobileWrapper.clientHeight
      }`;
      end = `top center`;
    }

    gsap.fromTo(
      bgArr[par.dataset.imageIndex],
      { clipPath: `inset(100% 0% 0% 0%)` },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: par,
          start: start,
          end: end,
          scrub: 0.4,
        },
      }
    );
  });
}

function createTitleAnimation() {
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 0,
    yoyo: true,
  });

  gsap.utils.toArray(".title_media img").forEach((img, index) => {
    let duration = 1.5;
    timeline.fromTo(
      img,
      { opacity: index < 1 ? 1 : 0 },
      {
        opacity: 1,
        duration: duration, // 1 second duration
        delay: index * duration, // Delay increases by 1 second for each image
      },
      0
    );
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#map1",
        start: "top 90%", // when the top of the trigger hits the top of the viewport
        end: "top top", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
    })
    .to(".title_section", { alpha: 0 });
}

function createKKParkAnim() {
  const section = document.querySelector(".kk_park");
  const text = section.querySelector(".pinned_text");
  const figureWrapper = section.querySelector(".kk_park_sat_wrapper");
  const figures = figureWrapper.querySelectorAll("figure");

  const zoomTl = gsap
    .timeline({
      scrollTrigger: {
        trigger: text,
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
      },
    })
    .fromTo(
      figureWrapper,
      { scale: 2.3, y: -100 },
      { scale: 1.2, y: -90, ease: "power1.inOut" }
    );

  gsap.utils.toArray(".kk_park .step").forEach((step, index) => {
    let figure = figures[index + 1];

    ScrollTrigger.create({
      fastScrollEnd: true,
      trigger: step,
      start: `top 90%`,
      onEnter: () => {
        figure.classList.add("make_visible");
      },
      onLeaveBack: () => {
        figure.classList.remove("make_visible");
      },
    });
  });
}

function test() {
  const mapLocations = [
    {
      mapAnimation: "flyTo",
      rotateAnimation: false,
      rotationDirection: "CW",
      callbackOut: "",
      onChapterEnter: [
        {
          layer: "scam-centre-route-part1-circles",
          opacity: 0,
          duration: 2000,
        },
        {
          layer: "scam-centre-route-part1-line",
          opacity: 0,
          duration: 2000,
        },
        {
          layer: "scam-centre-route-part2-circles",
          opacity: 0,
        },
        {
          layer: "scam-centre-route-part2-line",
          opacity: 0,
        },
        {
          layer: "scam-centre-route-part3-circles",
          opacity: 0,
        },
        {
          layer: "scam-centre-route-part3-line",
          opacity: 0,
        },
      ],
      centerLocation: {
        center: [110.21, 29.27],
        zoom: 4.5,
        pitch: 45.0,
        bearing: 0.0,
        speed: 0.4,
      },
    },
    {
      mapAnimation: "flyTo",
      rotateAnimation: false,
      rotationDirection: "CW",
      callbackOut: "",
      onChapterEnter: [
        {
          layer: "scam-centre-route-part1-circles",
          opacity: 0,
          duration: 2000,
        },
        {
          layer: "scam-centre-route-part1-line",
          opacity: 0,
          duration: 2000,
        },
        {
          layer: "scam-centre-route-part2-circles",
          opacity: 0,
        },
        {
          layer: "scam-centre-route-part2-line",
          opacity: 0,
        },
        {
          layer: "scam-centre-route-part3-circles",
          opacity: 0,
        },
        {
          layer: "scam-centre-route-part3-line",
          opacity: 0,
        },
      ],
      centerLocation: {
        center: [104.05045, 30.63413],
        zoom: 9,
        pitch: 45.0,
        bearing: 0.0,
        speed: 0.4,
      },
    },
    {
      mapAnimation: "flyTo",
      rotateAnimation: false,
      rotationDirection: "CCW",
      onChapterEnter: [
        {
          layer: "scam-centre-route-part1-circles",
          opacity: 1,
          duration: 1500,
        },
        {
          layer: "scam-centre-route-part1-line",
          opacity: 0.8,
          duration: 1500,
        },
        {
          layer: "scam-centre-route-part2-circles",
          opacity: 0,
          duration: 1000,
        },
        {
          layer: "scam-centre-route-part2-line",
          opacity: 0,
          duration: 1000,
        },
      ],
      callbackOut: "",
      centerLocation: {
        center: [108.35243, 21.7007],
        zoom: 9,
        pitch: 51.5,
        bearing: -164.82,
        speed: 0.4,
      },
    },
    {
      mapAnimation: "flyTo",
      rotateAnimation: false,
      rotationDirection: "CW",
      onChapterEnter: [
        {
          layer: "scam-centre-route-part1-circles",
          opacity: 1,
        },
        {
          layer: "scam-centre-route-part1-line",
          opacity: 0.8,
        },
        {
          layer: "scam-centre-route-part2-circles",
          opacity: 1,
          duration: 1000,
        },
        {
          layer: "scam-centre-route-part2-line",
          opacity: 0.8,
          duration: 1000,
        },
        {
          layer: "scam-centre-route-part3-circles",
          opacity: 0,
        },
        {
          layer: "scam-centre-route-part3-line",
          opacity: 0,
        },
      ],
      callbackOut: "",
      centerLocation: {
        center: [106.63345, 20.77809],
        zoom: 8,
        pitch: 44.0,
        bearing: -34.4,
        speed: 0.4,
      },
      // boundsLocation: {
      //   bounds: [
      //     [106.089478, 20.081729],
      //     [107.545166, 21.493964]
      //   ],
      //   fitBoundsOptions: {
      //     maxZoom: 9,
      //     pitch: 44.72,
      //     bearing: -45.58,
      //     speed: 0.4
      //   }
      // }
    },
    {
      mapAnimation: "flyTo",
      rotateAnimation: true,
      rotationDirection: "CW",
      onChapterEnter: [
        {
          layer: "scam-centre-route-part1-circles",
          opacity: 1,
        },
        {
          layer: "scam-centre-route-part1-line",
          opacity: 0.8,
        },
        {
          layer: "scam-centre-route-part2-circles",
          opacity: 1,
        },
        {
          layer: "scam-centre-route-part2-line",
          opacity: 0.8,
        },
        {
          layer: "scam-centre-route-part3-circles",
          opacity: 1,
          duration: 3000,
        },
        {
          layer: "scam-centre-route-part3-line",
          opacity: 0.8,
          duration: 3000,
        },
      ],
      callbackOut: "",
      // centerLocation: {
      //   center: [106.13925, 11.06713],
      //   zoom: 10.26,
      //   pitch: 7.5,
      //   bearing: 0.0
      // }
      centerLocation: {
        center: [106.064149, 10.995806],
        zoom: 7.61,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.4,
      },
      // boundsLocation: {
      //   bounds: [
      //     [106.064149, 10.995806],
      //     [106.244051, 11.143047],
      //   ],
      //   fitBoundsOptions: {
      //     maxZoom: 10,
      //     zoom: 10.33,
      //     pitch: 39.5,
      //     bearing: 0.0,
      //     speed: 0.4,
      //   },
      // },
    },
    {
      mapAnimation: "flyTo",
      rotateAnimation: false,
      rotationDirection: "CW",
      callbackIn: "",
      callbackOut: "",
      centerLocation: {
        center: [104.90091, 11.58829],
        zoom: 7.61,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.4,
      },
    },
  ];

  const canvas = d3.select("canvas").node();
  const context = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    projection
      .translate([canvas.width / 2, canvas.height / 1.2])
      .scale(Math.min(canvas.width, canvas.height) / 1.2);
  }

  const projection = d3.geoOrthographic();
  const path = d3.geoPath().projection(projection).context(context);

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  // d3.json("https://unpkg.com/world-atlas@1/world/110m.json").then((world) => {
  //   const land = topojson.feature(world, world.objects.land);
  //   const countries = topojson.feature(world, world.objects.countries);

  //   d3.timer((elapsed) => {
  //     context.clearRect(0, 0, canvas.width, canvas.height);

  //     // Draw water
  //     context.fillStyle = "lightblue";
  //     context.beginPath();
  //     path({ type: "Sphere" });
  //     context.fill();

  //     // Draw land
  //     context.fillStyle = "green";
  //     context.strokeStyle = "black";
  //     context.beginPath();
  //     path(land);
  //     context.fill();
  //     context.stroke();

  //     // Draw land
  //     context.fillStyle = "transparent";
  //     context.strokeStyle = "red";
  //     context.beginPath();
  //     path(countries);
  //     context.fill();
  //     context.stroke();

  //     // projection.rotate([elapsed * 0.02, -15]);
  //   });

  //   // Function to move, zoom, and change angle
  //   function moveToLocation(
  //     lat,
  //     lon,
  //     scale = projection.scale(),
  //     angle = [0, 0, 0],
  //     duration = 2000
  //   ) {
  //     d3.transition()
  //       .duration(duration)
  //       .tween("rotate", () => {
  //         const r = d3.interpolate(projection.rotate(), [-lon, -lat, angle[2]]);
  //         const s = d3.interpolate(projection.scale(), scale);
  //         return (t) => {
  //           projection.rotate(r(t)).scale(s(t));
  //           context.clearRect(0, 0, canvas.width, canvas.height);

  //           // Draw water
  //           context.fillStyle = "lightblue";
  //           context.beginPath();
  //           path({ type: "Sphere" });
  //           context.fill();

  //           // Draw land
  //           context.fillStyle = "green";
  //           context.strokeStyle = "black";
  //           context.beginPath();
  //           path(land);
  //           context.fill();
  //           context.stroke();
  //         };
  //       });
  //   }

  //   // Example usage: Move to New York City with zoom and angle
  //   // moveToLocation(40.7128, -74.006, 1000, [0, 0, 0], 3000);
  //   // moveToLocation(-32, 120.006, 1000, [0, 0, 0], 3000);

  //   gsap.utils.toArray(`.map1 .map_step`).forEach((step, index, steps) => {
  //     let nextStep = steps[index + 1]; // Get the next step

  //     ScrollTrigger.create({
  //       markers: true,
  //       trigger: step,
  //       start: "top 80%",
  //       endTrigger: nextStep ? nextStep : step,
  //       end: nextStep ? "top 80%" : "bottom 80%",
  //       onToggle: (element) => {
  //         // moveToLocation()

  //         if (element.isActive && mapLocations[index]?.centerLocation) {
  //           const { center, zoom, pitch, bearing } =
  //             mapLocations[index].centerLocation;
  //           moveToLocation(center[1], center[0], zoom * 300, [0, 0, 0], 2);
  //         } else {
  //           // if (mapLocation.onChapterExit) {
  //           //   mapLocation.onChapterExit.forEach(setLayerOpacity);
  //           // }
  //           // if (mapLocation.callbackOut) {
  //           //   mapLocation.callbackOut();
  //           // }
  //         }
  //       },
  //     });
  //   });
  // });

  d3.json("https://unpkg.com/world-atlas@1/world/110m.json").then((world) => {
    const land = topojson.feature(world, world.objects.land);

    function drawGlobe() {
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw water
      context.fillStyle = "lightblue";
      context.beginPath();
      path({ type: "Sphere" });
      context.fill();

      // Draw land
      context.fillStyle = "green";
      context.strokeStyle = "black";
      context.beginPath();
      path(land);
      context.fill();
      context.stroke();
    }

    d3.timer(() => drawGlobe());

    // Function to move, zoom, and change angle
    function moveToLocation(
      lat,
      lon,
      scale = projection.scale(),
      angle = [0, 0, 0],
      duration = 2000
    ) {
      // gsap.to(projection, {
      //   rotate: [-lon, -lat, angle[2]],
      //   scale: scale,
      //   duration: duration,
      //   onUpdate: drawGlobe,
      // });
      d3.transition()
        .duration(duration)
        .tween("rotate", () => {
          const r = d3.interpolate(projection.rotate(), [-lon, -lat, angle[2]]);
          const s = d3.interpolate(projection.scale(), scale);
          return (t) => {
            projection.rotate(r(t)).scale(s(t));
            context.clearRect(0, 0, canvas.width, canvas.height);

            // Draw water
            context.fillStyle = "lightblue";
            context.beginPath();
            path({ type: "Sphere" });
            context.fill();

            // Draw land
            context.fillStyle = "green";
            context.strokeStyle = "black";
            context.beginPath();
            path(land);
            context.fill();
            context.stroke();
          };
        });
    }

    gsap.utils.toArray(`.map1 .map_step`).forEach((step, index, steps) => {
      let nextStep = steps[index + 1]; // Get the next step

      ScrollTrigger.create({
        markers: true,
        trigger: step,
        start: "top 80%",
        endTrigger: nextStep ? nextStep : step,
        end: nextStep ? "top 80%" : "bottom 80%",
        onToggle: (element) => {
          // moveToLocation()

          if (element.isActive && mapLocations[index]?.centerLocation) {
            const { center, zoom, pitch, bearing, speed } =
              mapLocations[index].centerLocation;
            moveToLocation(
              center[1],
              center[0],
              zoom * 200,
              [0, 0, 0],
              speed * 1000
            );
          } else {
            // if (mapLocation.onChapterExit) {
            //   mapLocation.onChapterExit.forEach(setLayerOpacity);
            // }
            // if (mapLocation.callbackOut) {
            //   mapLocation.callbackOut();
            // }
          }
        },
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  createMapboxMap(map1Config, map1Locations);

  createTitleAnimation();

  createKKParkAnim();

  // createScrollFades();

  createPigButchering();

  document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
    img.addEventListener("load", function () {
      ScrollTrigger.refresh();
    });
  });
});
