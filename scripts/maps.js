gsap.registerPlugin(ScrollTrigger);

const cambodiaData = [
  {
    State: "Banteay Meanchey",
    lat: 13.65790233,
    long: 102.5809155,
  },
  {
    State: "Banteay Meanchey",
    lat: 13.66570489,
    long: 102.5597419,
  },
  {
    State: "Banteay Meanchey",
    lat: 13.65969361,
    long: 102.5502971,
  },
  {
    State: "Banteay Meanchey",
    lat: 13.66464686,
    long: 102.5656601,
  },
  {
    State: "Banteay Meanchey",
    lat: 13.66197833,
    long: 102.5555214,
  },
  {
    State: "Banteay Meanchey",
    lat: 13.66722844,
    long: 102.5610755,
  },
  {
    State: "Banteay Meanchey",
    lat: 13.66730781,
    long: 102.5661506,
  },
  {
    State: "Banteay Meanchey",
    lat: 13.65921704,
    long: 102.558323,
  },
  {
    State: "Banteay Meanchey",
    lat: 13.67918466,
    long: 102.5612792,
  },
  {
    State: "Banteay Meanchey",
    lat: 13.66538565,
    long: 102.5537224,
  },
  {
    State: "Banteay Meanchey",
    lat: 13.66068772,
    long: 102.557749,
  },
  {
    State: "Banteay Meanchey",
    lat: 13.63449187,
    long: 102.604721,
  },
  {
    State: "Kampot",
    lat: 10.6363708,
    long: 104.0178155,
  },
  {
    State: "Kampot",
    lat: 10.44040114,
    long: 104.442499,
  },
  {
    State: "Kandal",
    lat: 10.96446445,
    long: 105.0611242,
  },
  {
    State: "Kandal",
    lat: 10.94763639,
    long: 105.0779026,
  },
  {
    State: "Kandal",
    lat: 10.9516122,
    long: 105.0704316,
  },
  {
    State: "Kandal",
    lat: 10.95857497,
    long: 105.0738474,
  },
  {
    State: "Kandal",
    lat: 10.95547059,
    long: 105.0790529,
  },
  {
    State: "Kandal",
    lat: 11.37583872,
    long: 104.7552093,
  },
  {
    State: "Koh Kong",
    lat: 10.90876614,
    long: 103.126827,
  },
  {
    State: "Koh Kong",
    lat: 11.64218976,
    long: 102.9152593,
  },
  {
    State: "Koh Kong",
    lat: 11.60848914,
    long: 102.9844891,
  },
  {
    State: "Koh Kong",
    lat: 10.88815054,
    long: 103.1466734,
  },
  {
    State: "Oddar Meanchey",
    lat: 14.42571478,
    long: 103.6970075,
  },
  {
    State: "Oddar Meanchey",
    lat: 14.43321755,
    long: 103.7002633,
  },
  {
    State: "Oddar Meanchey",
    lat: 14.43441546,
    long: 103.698863,
  },
  {
    State: "Oddar Meanchey",
    lat: 14.34359561,
    long: 104.0559101,
  },
  {
    State: "Phnom Penh",
    lat: 11.58810664,
    long: 104.9374109,
  },
  {
    State: "Phnom Penh",
    lat: 11.58668942,
    long: 104.8755124,
  },
  {
    State: "Phnom Penh",
    lat: 11.56253493,
    long: 104.8706423,
  },
  {
    State: "Phnom Penh",
    lat: 11.54099779,
    long: 104.9172101,
  },
  {
    State: "Phnom Penh",
    lat: 11.5616715,
    long: 104.8722479,
  },
  {
    State: "Phnom Penh",
    lat: 11.53991268,
    long: 104.9074602,
  },
  {
    State: "Phnom Penh",
    lat: 11.6040739,
    long: 104.8903286,
  },
  {
    State: "Phnom Penh",
    lat: 11.55111945,
    long: 104.9224959,
  },
  {
    State: "Phnom Penh",
    lat: 11.58611323,
    long: 104.8738673,
  },
  {
    State: "Phnom Penh",
    lat: 11.45251323,
    long: 104.8557743,
  },
  {
    State: "Phnom Penh",
    lat: 11.59792252,
    long: 104.8704573,
  },
  {
    State: "Phnom Penh",
    lat: 11.55374871,
    long: 104.9081195,
  },
  {
    State: "Phnom Penh",
    lat: 11.56250036,
    long: 104.8686882,
  },
  {
    State: "Phnom Penh",
    lat: 11.57072238,
    long: 104.8601692,
  },
  {
    State: "Phnom Penh",
    lat: 11.58497055,
    long: 104.9041328,
  },
  {
    State: "Phnom Penh",
    lat: 11.56382418,
    long: 104.8838578,
  },
  {
    State: "Pursat",
    lat: 12.12690657,
    long: 102.7403501,
  },
  {
    State: "Sihanouk",
    lat: 10.58980953,
    long: 103.5421398,
  },
  {
    State: "Sihanouk",
    lat: 10.60330196,
    long: 103.5313838,
  },
  {
    State: "Sihanouk",
    lat: 10.73755781,
    long: 103.7343626,
  },
  {
    State: "Sihanouk",
    lat: 10.64044001,
    long: 103.5233715,
  },
  {
    State: "Sihanouk",
    lat: 10.62480176,
    long: 103.5248906,
  },
  {
    State: "Sihanouk",
    lat: 10.61038362,
    long: 103.5167958,
  },
  {
    State: "Sihanouk",
    lat: 10.60931388,
    long: 103.5240997,
  },
  {
    State: "Sihanouk",
    lat: 10.63418371,
    long: 103.5064574,
  },
  {
    State: "Sihanouk",
    lat: 10.6259833,
    long: 103.5023472,
  },
  {
    State: "Sihanouk",
    lat: 10.61625297,
    long: 103.5653096,
  },
  {
    State: "Sihanouk",
    lat: 10.59633801,
    long: 103.6315526,
  },
  {
    State: "Sihanouk",
    lat: 10.61224763,
    long: 103.52521,
  },
  {
    State: "Sihanouk",
    lat: 10.60892375,
    long: 103.5177609,
  },
  {
    State: "Sihanouk",
    lat: 10.61445684,
    long: 103.5178843,
  },
  {
    State: "Sihanouk",
    lat: 10.60958593,
    long: 103.533636,
  },
  {
    State: "Sihanouk",
    lat: 10.64189718,
    long: 103.5362469,
  },
  {
    State: "Sihanouk",
    lat: 10.5904875,
    long: 103.5413289,
  },
  {
    State: "Sihanouk",
    lat: 10.60861654,
    long: 103.5164727,
  },
  {
    State: "Sihanouk",
    lat: 10.57614658,
    long: 103.5539383,
  },
  {
    State: "Sihanouk",
    lat: 10.60459318,
    long: 103.564179,
  },
  {
    State: "Sihanouk",
    lat: 10.58664598,
    long: 103.5729862,
  },
  {
    State: "Sihanouk",
    lat: 10.57887483,
    long: 103.5563562,
  },
  {
    State: "Sihanouk",
    lat: 10.60922139,
    long: 103.529862,
  },
  {
    State: "Sihanouk",
    lat: 10.62795011,
    long: 103.50489,
  },
  {
    State: "Sihanouk",
    lat: 10.62621544,
    long: 103.4970737,
  },
  {
    State: "Sihanouk",
    lat: 10.55956919,
    long: 103.5595399,
  },
  {
    State: "Sihanouk",
    lat: 10.61091446,
    long: 103.5050546,
  },
  {
    State: "Sihanouk",
    lat: 10.6161151,
    long: 103.5329266,
  },
  {
    State: "Sihanouk",
    lat: 10.60471016,
    long: 103.5276326,
  },
  {
    State: "Sihanouk",
    lat: 10.61625916,
    long: 103.5237362,
  },
  {
    State: "Sihanouk",
    lat: 10.63663318,
    long: 103.5146098,
  },
  {
    State: "Sihanouk",
    lat: 10.58579382,
    long: 103.5508605,
  },
  {
    State: "Sihanouk",
    lat: 10.61092639,
    long: 103.5023805,
  },
  {
    State: "Sihanouk",
    lat: 10.74022618,
    long: 103.6448806,
  },
  {
    State: "Sihanouk",
    lat: 10.62500943,
    long: 103.4994629,
  },
  {
    State: "Sihanouk",
    lat: 10.64066461,
    long: 103.5082494,
  },
  {
    State: "Sihanouk",
    lat: 10.60615837,
    long: 103.5275468,
  },
  {
    State: "Sihanouk",
    lat: 10.64189176,
    long: 103.532186,
  },
  {
    State: "Sihanouk",
    lat: 10.61024055,
    long: 103.5070293,
  },
  {
    State: "Sihanouk",
    lat: 10.5722775,
    long: 103.5544482,
  },
  {
    State: "Sihanouk",
    lat: 10.6217358,
    long: 103.5085764,
  },
  {
    State: "Sihanouk",
    lat: 10.63242085,
    long: 103.5064738,
  },
  {
    State: "Sihanouk",
    lat: 10.62120677,
    long: 103.5007896,
  },
  {
    State: "Sihanouk",
    lat: 10.61126638,
    long: 103.5226945,
  },
  {
    State: "Sihanouk",
    lat: 10.61662164,
    long: 103.5256116,
  },
  {
    State: "Sihanouk",
    lat: 10.62544063,
    long: 103.5248693,
  },
  {
    State: "Sihanouk",
    lat: 10.59621798,
    long: 103.538719,
  },
  {
    State: "Sihanouk",
    lat: 10.62385718,
    long: 103.5170625,
  },
  {
    State: "Sihanouk",
    lat: 10.62126044,
    long: 103.5248086,
  },
  {
    State: "Sihanouk",
    lat: 10.61172609,
    long: 103.5176274,
  },
  {
    State: "Sihanouk",
    lat: 10.60980012,
    long: 103.5239531,
  },
  {
    State: "Sihanouk",
    lat: 10.62952287,
    long: 103.5258817,
  },
  {
    State: "Sihanouk",
    lat: 10.60699457,
    long: 103.5262329,
  },
  {
    State: "Svay Rieng",
    lat: 11.07542906,
    long: 106.169113,
  },
  {
    State: "Svay Rieng",
    lat: 11.24638116,
    long: 105.9068023,
  },
  {
    State: "Svay Rieng",
    lat: 11.06894683,
    long: 106.1710616,
  },
  {
    State: "Svay Rieng",
    lat: 11.07308263,
    long: 106.1632054,
  },
  {
    State: "Svay Rieng",
    lat: 10.93111038,
    long: 106.1400947,
  },
  {
    State: "Svay Rieng",
    lat: 11.07814114,
    long: 106.1638207,
  },
  {
    State: "Svay Rieng",
    lat: 11.07543246,
    long: 106.1693493,
  },
  {
    State: "Svay Rieng",
    lat: 11.06591595,
    long: 106.1635522,
  },
  {
    State: "Svay Rieng",
    lat: 11.07265956,
    long: 106.1610052,
  },
  {
    State: "Svay Rieng",
    lat: 11.07759254,
    long: 106.1697623,
  },
  {
    State: "Svay Rieng",
    lat: 11.07352158,
    long: 106.1673981,
  },
  {
    State: "Svay Rieng",
    lat: 11.07311043,
    long: 106.1668687,
  },
  {
    State: "Svay Rieng",
    lat: 11.06991496,
    long: 106.1746539,
  },
  {
    State: "Svay Rieng",
    lat: 11.07033576,
    long: 106.163342,
  },
  {
    State: "Svay Rieng",
    lat: 11.07795156,
    long: 106.1646031,
  },
  {
    State: "Tbong Khmum",
    lat: 11.67366463,
    long: 105.9736879,
  },
];

function createMapboxMap(config, mapLocations) {
  function setLayerOpacity(layer) {
    const layerTypes = {
      fill: ["fill-opacity"],
      line: ["line-opacity"],
      circle: ["circle-opacity", "circle-stroke-opacity"],
      symbol: ["icon-opacity", "text-opacity"],
      raster: ["raster-opacity"],
      "fill-extrusion": ["fill-extrusion-opacity"],
      heatmap: ["heatmap-opacity"],
    };

    const layerType = map.getLayer(layer.layer).type;
    const paintProps = layerTypes[layerType];

    paintProps.forEach(function (prop) {
      const options = {};
      if (layer.duration) {
        let transitionProp = prop + "-transition";
        options.duration = layer.duration;
        map.setPaintProperty(layer.layer, transitionProp, options);
      }
      map.setPaintProperty(layer.layer, prop, layer.opacity, options);
    });
  }

  mapboxgl.accessToken = config.accessToken;

  const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery
      ? "&pluginName=scrollytellingV2"
      : "?pluginName=scrollytellingV2";
    return {
      url: url + suffix,
    };
  };

  let initMapOptions = {
    container: config.container,
    style: config.style,
    interactive: false,
    transformRequest: transformRequest,
    projection: config.projection,
  };

  if (mapLocations[0].centerLocation) {
    initMapOptions = {
      ...initMapOptions,
      ...mapLocations[0].centerLocation,
    };
  } else {
    initInsetOptions.bounds = mapLocations[0].boundsLocation.bounds;
    initInsetOptions.fitBoundsOptions =
      mapLocations[0].boundsLocation.fitBoundsOptions;
  }

  var map = new mapboxgl.Map(initMapOptions);

  // Create a inset map if enabled in config.js
  if (config.inset) {
    let initInsetOptions = {
      container: config.insetContainer,
      style: "mapbox://styles/mapbox/dark-v10",
      zoom: 2, // starting zoom
      hash: false,
      interactive: false,
      attributionControl: false,
    };

    if (mapLocations[0].centerLocation) {
      initInsetOptions.center = mapLocations[0].centerLocation.center;
    } else {
      initInsetOptions.bounds = mapLocations[0].boundsLocation.bounds;
      initInsetOptions.fitBoundsOptions =
        mapLocations[0].boundsLocation.fitBoundsOptions;
      initInsetOptions.fitBoundsOptions.maxZoom = 2;
    }

    var insetMap = new mapboxgl.Map(initInsetOptions);
  }

  function calculateCornerCoordinates(center, width, height, angle) {
    const earthCircumference = 40075017; // Earth's circumference in meters
    const halfWidth = width / 2;
    const halfHeight = height / 2;

    // Convert angle to radians
    const angleRad = (angle * Math.PI) / 180;

    // Calculate the change in longitude and latitude for the given width and height
    const deltaLng = (halfWidth / earthCircumference) * 360;
    const deltaLat = (halfHeight / earthCircumference) * 360;

    // Unrotated corners
    const unrotatedTopLeft = [-deltaLng, deltaLat];
    const unrotatedTopRight = [deltaLng, deltaLat];
    const unrotatedBottomRight = [deltaLng, -deltaLat];
    const unrotatedBottomLeft = [-deltaLng, -deltaLat];

    // Rotation function
    function rotatePoint(point, angleRad) {
      const cos = Math.cos(angleRad);
      const sin = Math.sin(angleRad);
      return [point[0] * cos - point[1] * sin, point[0] * sin + point[1] * cos];
    }

    // Apply rotation
    const topLeft = rotatePoint(unrotatedTopLeft, angleRad);
    const topRight = rotatePoint(unrotatedTopRight, angleRad);
    const bottomRight = rotatePoint(unrotatedBottomRight, angleRad);
    const bottomLeft = rotatePoint(unrotatedBottomLeft, angleRad);

    // Translate back to the center location
    return [
      [center[0] + topLeft[0], center[1] + topLeft[1]],
      [center[0] + topRight[0], center[1] + topRight[1]],
      [center[0] + bottomRight[0], center[1] + bottomRight[1]],
      [center[0] + bottomLeft[0], center[1] + bottomLeft[1]],
    ];
  }

  map.on("load", function () {
    if (config.use3dTerrain) {
      map.addSource("mapbox-dem", {
        type: "raster-dem",
        url: "mapbox://mapbox.mapbox-terrain-dem-v1",
        tileSize: 512,
        maxzoom: 14,
      });
      // add the DEM source as a terrain layer with exaggerated height
      map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });

      // add a sky layer that will show when the map is highly pitched
      map.addLayer({
        id: "sky",
        type: "sky",
        paint: {
          "sky-type": "atmosphere",
          "sky-atmosphere-sun": [0.0, 0.0],
          "sky-atmosphere-sun-intensity": 15,
        },
      });
    }

    // const imageWidth = 40000;
    // const imageHeight = 26680;

    // map.addSource("pic1", {
    //   type: "image",
    //   url: "../assets/pics/1C6A3378.webp",
    //   coordinates: calculateCornerCoordinates(
    //     [108.34101, 21.13817],
    //     imageWidth * 2,
    //     imageHeight * 2,
    //     180
    //   ),
    // });
    // map.addLayer({
    //   id: "pic1-layer",
    //   type: "raster",
    //   source: "pic1",
    //   paint: {
    //     "raster-opacity": 1,
    //     "raster-fade-duration": 0,
    //   },
    // });
    // map.addSource("pic2", {
    //   type: "image",
    //   url: "../assets/pics/DJI_0070.webp",
    //   coordinates: calculateCornerCoordinates(
    //     [106.13925, 11.06713],
    //     imageWidth * 2,
    //     imageHeight * 2,
    //     0
    //   ),
    // });
    // map.addLayer({
    //   id: "pic2-layer",
    //   type: "raster",
    //   source: "pic2",
    //   paint: {
    //     "raster-opacity": 1,
    //     "raster-fade-duration": 0,
    //   },
    // });

    // As the map moves, grab and update bounds in inset map.
    if (config.inset) {
      map.on("move", getInsetBounds);
    }

    gsap.utils
      .toArray(`.${config.scrollSection} .map_step`)
      .forEach((step, index, steps) => {
        let nextStep = steps[index + 1]; // Get the next step

        ScrollTrigger.create({
          trigger: step,
          start: "top 80%",
          endTrigger: nextStep ? nextStep : step,
          end: nextStep ? "top 80%" : "bottom 80%",
          onToggle: (element) => {
            let mapLocation = mapLocations[index];

            function boundsOrCenter(mapInstance, location, inset) {
              if (location.centerLocation) {
                mapInstance.flyTo({
                  ...location.centerLocation,
                  zoom: inset ? 3 : location.centerLocation.zoom,
                });
              } else if (location.boundsLocation) {
                mapInstance.fitBounds(location.boundsLocation.bounds, {
                  ...location.boundsLocation.fitBoundsOptions,
                  maxZoom: inset
                    ? 3
                    : location.boundsLocation.fitBoundsOptions.maxZoom,
                });
              }
            }

            if (mapLocation) {
              if (element.isActive) {
                // Uses the bounds or center to flyTo on the map
                boundsOrCenter(map, mapLocation, false);

                if (config.inset) {
                  // Uses the bounds or center to flyTo on the inset map
                  boundsOrCenter(insetMap, mapLocation, true);
                }

                if (mapLocation.onChapterEnter) {
                  mapLocation.onChapterEnter.forEach(setLayerOpacity);
                }

                if (mapLocation.callbackIn) {
                  mapLocation.callbackIn();
                }

                if (mapLocation.rotateAnimation) {
                  map.once("moveend", () => {
                    let rotateNumber = map.getBearing();

                    let rotationBearing =
                      mapLocation.rotationDirection === "CCW"
                        ? ((rotateNumber + 180) % 360) + 1
                        : ((rotateNumber + 180) % 360) - 1;

                    map.rotateTo(rotationBearing, {
                      duration: 200000,
                      easing: function (t) {
                        return Math.sin((t * Math.PI) / 2);
                      },
                    });
                  });
                }
              } else {
                if (mapLocation.onChapterExit) {
                  mapLocation.onChapterExit.forEach(setLayerOpacity);
                }
                if (mapLocation.callbackOut) {
                  mapLocation.callbackOut();
                }
              }
            }
          },
        });

        // if (index < 1) {
        //   const titleAnimation = gsap
        //     .timeline({
        //       scrollTrigger: {
        //         trigger: "#map1",
        //         start: "top 90%", // when the top of the trigger hits the top of the viewport
        //         end: "top top", // end after scrolling 500px beyond the start
        //         scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        //       },
        //     })
        //     .to(".title_section", { alpha: 0 });
        // }
      });
  });

  //Helper functions for insetmap
  function getInsetBounds() {
    let bounds = map.getBounds();

    let boundsJson = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [bounds._sw.lng, bounds._sw.lat],
                [bounds._ne.lng, bounds._sw.lat],
                [bounds._ne.lng, bounds._ne.lat],
                [bounds._sw.lng, bounds._ne.lat],
                [bounds._sw.lng, bounds._sw.lat],
              ],
            ],
          },
        },
      ],
    };

    // if (initLoad) {
    //   addInsetLayer(boundsJson);
    //   initLoad = false;
    // } else {
    //   updateInsetLayer(boundsJson);
    // }
  }
}

const map1Config = {
  scrollSection: "map1",
  container: "map1",
  insetContainer: "map1_mapInset",
  style: "mapbox://styles/theconversation/clx1vftez01o901po1n5l7okg",
  accessToken:
    "pk.eyJ1IjoidGhlY29udmVyc2F0aW9uIiwiYSI6ImNsbmszZXA1NzF0Mmcyam1rcjhxenA5aGMifQ.To6VqAJCNtd1T0Xs99l6LQ",
  showMarkers: false,
  markerColor: "#3FB1CE",
  inset: true,
  theme: "dark",
  use3dTerrain: false, //set true for enabling 3D maps.
  auto: false,
};
const map1Locations = [
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
    boundsLocation: {
      bounds: [
        [106.064149, 10.995806],
        [106.244051, 11.143047],
      ],
      fitBoundsOptions: {
        maxZoom: 10,
        zoom: 10.33,
        pitch: 39.5,
        bearing: 0.0,
        speed: 0.4,
      },
    },
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
