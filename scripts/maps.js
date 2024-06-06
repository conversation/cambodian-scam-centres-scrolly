gsap.registerPlugin(ScrollTrigger);

const cambodiaData = [
  {
    State: "Banteay Meanchey",
    lat: 13.65790233,
    long: 102.5809155
  },
  {
    State: "Banteay Meanchey",
    lat: 13.66570489,
    long: 102.5597419
  },
  {
    State: "Banteay Meanchey",
    lat: 13.65969361,
    long: 102.5502971
  },
  {
    State: "Banteay Meanchey",
    lat: 13.66464686,
    long: 102.5656601
  },
  {
    State: "Banteay Meanchey",
    lat: 13.66197833,
    long: 102.5555214
  },
  {
    State: "Banteay Meanchey",
    lat: 13.66722844,
    long: 102.5610755
  },
  {
    State: "Banteay Meanchey",
    lat: 13.66730781,
    long: 102.5661506
  },
  {
    State: "Banteay Meanchey",
    lat: 13.65921704,
    long: 102.558323
  },
  {
    State: "Banteay Meanchey",
    lat: 13.67918466,
    long: 102.5612792
  },
  {
    State: "Banteay Meanchey",
    lat: 13.66538565,
    long: 102.5537224
  },
  {
    State: "Banteay Meanchey",
    lat: 13.66068772,
    long: 102.557749
  },
  {
    State: "Banteay Meanchey",
    lat: 13.63449187,
    long: 102.604721
  },
  {
    State: "Kampot",
    lat: 10.6363708,
    long: 104.0178155
  },
  {
    State: "Kampot",
    lat: 10.44040114,
    long: 104.442499
  },
  {
    State: "Kandal",
    lat: 10.96446445,
    long: 105.0611242
  },
  {
    State: "Kandal",
    lat: 10.94763639,
    long: 105.0779026
  },
  {
    State: "Kandal",
    lat: 10.9516122,
    long: 105.0704316
  },
  {
    State: "Kandal",
    lat: 10.95857497,
    long: 105.0738474
  },
  {
    State: "Kandal",
    lat: 10.95547059,
    long: 105.0790529
  },
  {
    State: "Kandal",
    lat: 11.37583872,
    long: 104.7552093
  },
  {
    State: "Koh Kong",
    lat: 10.90876614,
    long: 103.126827
  },
  {
    State: "Koh Kong",
    lat: 11.64218976,
    long: 102.9152593
  },
  {
    State: "Koh Kong",
    lat: 11.60848914,
    long: 102.9844891
  },
  {
    State: "Koh Kong",
    lat: 10.88815054,
    long: 103.1466734
  },
  {
    State: "Oddar Meanchey",
    lat: 14.42571478,
    long: 103.6970075
  },
  {
    State: "Oddar Meanchey",
    lat: 14.43321755,
    long: 103.7002633
  },
  {
    State: "Oddar Meanchey",
    lat: 14.43441546,
    long: 103.698863
  },
  {
    State: "Oddar Meanchey",
    lat: 14.34359561,
    long: 104.0559101
  },
  {
    State: "Phnom Penh",
    lat: 11.58810664,
    long: 104.9374109
  },
  {
    State: "Phnom Penh",
    lat: 11.58668942,
    long: 104.8755124
  },
  {
    State: "Phnom Penh",
    lat: 11.56253493,
    long: 104.8706423
  },
  {
    State: "Phnom Penh",
    lat: 11.54099779,
    long: 104.9172101
  },
  {
    State: "Phnom Penh",
    lat: 11.5616715,
    long: 104.8722479
  },
  {
    State: "Phnom Penh",
    lat: 11.53991268,
    long: 104.9074602
  },
  {
    State: "Phnom Penh",
    lat: 11.6040739,
    long: 104.8903286
  },
  {
    State: "Phnom Penh",
    lat: 11.55111945,
    long: 104.9224959
  },
  {
    State: "Phnom Penh",
    lat: 11.58611323,
    long: 104.8738673
  },
  {
    State: "Phnom Penh",
    lat: 11.45251323,
    long: 104.8557743
  },
  {
    State: "Phnom Penh",
    lat: 11.59792252,
    long: 104.8704573
  },
  {
    State: "Phnom Penh",
    lat: 11.55374871,
    long: 104.9081195
  },
  {
    State: "Phnom Penh",
    lat: 11.56250036,
    long: 104.8686882
  },
  {
    State: "Phnom Penh",
    lat: 11.57072238,
    long: 104.8601692
  },
  {
    State: "Phnom Penh",
    lat: 11.58497055,
    long: 104.9041328
  },
  {
    State: "Phnom Penh",
    lat: 11.56382418,
    long: 104.8838578
  },
  {
    State: "Pursat",
    lat: 12.12690657,
    long: 102.7403501
  },
  {
    State: "Sihanouk",
    lat: 10.58980953,
    long: 103.5421398
  },
  {
    State: "Sihanouk",
    lat: 10.60330196,
    long: 103.5313838
  },
  {
    State: "Sihanouk",
    lat: 10.73755781,
    long: 103.7343626
  },
  {
    State: "Sihanouk",
    lat: 10.64044001,
    long: 103.5233715
  },
  {
    State: "Sihanouk",
    lat: 10.62480176,
    long: 103.5248906
  },
  {
    State: "Sihanouk",
    lat: 10.61038362,
    long: 103.5167958
  },
  {
    State: "Sihanouk",
    lat: 10.60931388,
    long: 103.5240997
  },
  {
    State: "Sihanouk",
    lat: 10.63418371,
    long: 103.5064574
  },
  {
    State: "Sihanouk",
    lat: 10.6259833,
    long: 103.5023472
  },
  {
    State: "Sihanouk",
    lat: 10.61625297,
    long: 103.5653096
  },
  {
    State: "Sihanouk",
    lat: 10.59633801,
    long: 103.6315526
  },
  {
    State: "Sihanouk",
    lat: 10.61224763,
    long: 103.52521
  },
  {
    State: "Sihanouk",
    lat: 10.60892375,
    long: 103.5177609
  },
  {
    State: "Sihanouk",
    lat: 10.61445684,
    long: 103.5178843
  },
  {
    State: "Sihanouk",
    lat: 10.60958593,
    long: 103.533636
  },
  {
    State: "Sihanouk",
    lat: 10.64189718,
    long: 103.5362469
  },
  {
    State: "Sihanouk",
    lat: 10.5904875,
    long: 103.5413289
  },
  {
    State: "Sihanouk",
    lat: 10.60861654,
    long: 103.5164727
  },
  {
    State: "Sihanouk",
    lat: 10.57614658,
    long: 103.5539383
  },
  {
    State: "Sihanouk",
    lat: 10.60459318,
    long: 103.564179
  },
  {
    State: "Sihanouk",
    lat: 10.58664598,
    long: 103.5729862
  },
  {
    State: "Sihanouk",
    lat: 10.57887483,
    long: 103.5563562
  },
  {
    State: "Sihanouk",
    lat: 10.60922139,
    long: 103.529862
  },
  {
    State: "Sihanouk",
    lat: 10.62795011,
    long: 103.50489
  },
  {
    State: "Sihanouk",
    lat: 10.62621544,
    long: 103.4970737
  },
  {
    State: "Sihanouk",
    lat: 10.55956919,
    long: 103.5595399
  },
  {
    State: "Sihanouk",
    lat: 10.61091446,
    long: 103.5050546
  },
  {
    State: "Sihanouk",
    lat: 10.6161151,
    long: 103.5329266
  },
  {
    State: "Sihanouk",
    lat: 10.60471016,
    long: 103.5276326
  },
  {
    State: "Sihanouk",
    lat: 10.61625916,
    long: 103.5237362
  },
  {
    State: "Sihanouk",
    lat: 10.63663318,
    long: 103.5146098
  },
  {
    State: "Sihanouk",
    lat: 10.58579382,
    long: 103.5508605
  },
  {
    State: "Sihanouk",
    lat: 10.61092639,
    long: 103.5023805
  },
  {
    State: "Sihanouk",
    lat: 10.74022618,
    long: 103.6448806
  },
  {
    State: "Sihanouk",
    lat: 10.62500943,
    long: 103.4994629
  },
  {
    State: "Sihanouk",
    lat: 10.64066461,
    long: 103.5082494
  },
  {
    State: "Sihanouk",
    lat: 10.60615837,
    long: 103.5275468
  },
  {
    State: "Sihanouk",
    lat: 10.64189176,
    long: 103.532186
  },
  {
    State: "Sihanouk",
    lat: 10.61024055,
    long: 103.5070293
  },
  {
    State: "Sihanouk",
    lat: 10.5722775,
    long: 103.5544482
  },
  {
    State: "Sihanouk",
    lat: 10.6217358,
    long: 103.5085764
  },
  {
    State: "Sihanouk",
    lat: 10.63242085,
    long: 103.5064738
  },
  {
    State: "Sihanouk",
    lat: 10.62120677,
    long: 103.5007896
  },
  {
    State: "Sihanouk",
    lat: 10.61126638,
    long: 103.5226945
  },
  {
    State: "Sihanouk",
    lat: 10.61662164,
    long: 103.5256116
  },
  {
    State: "Sihanouk",
    lat: 10.62544063,
    long: 103.5248693
  },
  {
    State: "Sihanouk",
    lat: 10.59621798,
    long: 103.538719
  },
  {
    State: "Sihanouk",
    lat: 10.62385718,
    long: 103.5170625
  },
  {
    State: "Sihanouk",
    lat: 10.62126044,
    long: 103.5248086
  },
  {
    State: "Sihanouk",
    lat: 10.61172609,
    long: 103.5176274
  },
  {
    State: "Sihanouk",
    lat: 10.60980012,
    long: 103.5239531
  },
  {
    State: "Sihanouk",
    lat: 10.62952287,
    long: 103.5258817
  },
  {
    State: "Sihanouk",
    lat: 10.60699457,
    long: 103.5262329
  },
  {
    State: "Svay Rieng",
    lat: 11.07542906,
    long: 106.169113
  },
  {
    State: "Svay Rieng",
    lat: 11.24638116,
    long: 105.9068023
  },
  {
    State: "Svay Rieng",
    lat: 11.06894683,
    long: 106.1710616
  },
  {
    State: "Svay Rieng",
    lat: 11.07308263,
    long: 106.1632054
  },
  {
    State: "Svay Rieng",
    lat: 10.93111038,
    long: 106.1400947
  },
  {
    State: "Svay Rieng",
    lat: 11.07814114,
    long: 106.1638207
  },
  {
    State: "Svay Rieng",
    lat: 11.07543246,
    long: 106.1693493
  },
  {
    State: "Svay Rieng",
    lat: 11.06591595,
    long: 106.1635522
  },
  {
    State: "Svay Rieng",
    lat: 11.07265956,
    long: 106.1610052
  },
  {
    State: "Svay Rieng",
    lat: 11.07759254,
    long: 106.1697623
  },
  {
    State: "Svay Rieng",
    lat: 11.07352158,
    long: 106.1673981
  },
  {
    State: "Svay Rieng",
    lat: 11.07311043,
    long: 106.1668687
  },
  {
    State: "Svay Rieng",
    lat: 11.06991496,
    long: 106.1746539
  },
  {
    State: "Svay Rieng",
    lat: 11.07033576,
    long: 106.163342
  },
  {
    State: "Svay Rieng",
    lat: 11.07795156,
    long: 106.1646031
  },
  {
    State: "Tbong Khmum",
    lat: 11.67366463,
    long: 105.9736879
  }
];

function mapboxGL(config, mapLocations) {
  var initLoad = true;
  var layerTypes = {
    fill: ["fill-opacity"],
    line: ["line-opacity"],
    circle: ["circle-opacity", "circle-stroke-opacity"],
    symbol: ["icon-opacity", "text-opacity"],
    raster: ["raster-opacity"],
    "fill-extrusion": ["fill-extrusion-opacity"],
    heatmap: ["heatmap-opacity"]
  };

  function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
  }

  function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function (prop) {
      var options = {};
      if (layer.duration) {
        var transitionProp = prop + "-transition";
        options = { duration: layer.duration };
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
      url: url + suffix
    };
  };

  let initMapOptions = {
    container: config.container,
    style: config.style,
    interactive: false,
    transformRequest: transformRequest,
    projection: config.projection
  };

  if (mapLocations[0].centerLocation) {
    initMapOptions = {
      ...initMapOptions,
      ...mapLocations[0].centerLocation
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
      attributionControl: false
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

  map.on("load", function () {
    if (config.use3dTerrain) {
      map.addSource("mapbox-dem", {
        type: "raster-dem",
        url: "mapbox://mapbox.mapbox-terrain-dem-v1",
        tileSize: 512,
        maxzoom: 14
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
          "sky-atmosphere-sun-intensity": 15
        }
      });
    }

    // As the map moves, grab and update bounds in inset map.
    if (config.inset) {
      map.on("move", getInsetBounds);
    }

    gsap.utils
      .toArray(`.${config.scrollSection} .map_step`)
      .forEach((step, index, steps) => {
        let nextStep = steps[index + 1]; // Get the next step

        ScrollTrigger.create({
          // markers: true,
          trigger: step,
          start: "top 80%",
          end: () =>
            nextStep
              ? `top+=${nextStep.offsetTop - step.offsetTop} 80%`
              : "bottom 80%",

          onToggle: (element) => {
            let mapLocation = mapLocations[index];

            function boundsOrCenter(mapInstance, location, inset) {
              if (location.centerLocation) {
                mapInstance.flyTo({
                  ...location.centerLocation,
                  zoom: inset ? 3 : location.centerLocation.zoom
                });
              } else if (location.boundsLocation) {
                mapInstance.fitBounds(location.boundsLocation.bounds, {
                  ...location.boundsLocation.fitBoundsOptions,
                  maxZoom: inset
                    ? 3
                    : location.boundsLocation.fitBoundsOptions.maxZoom
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

                if (mapLocation.callback) {
                  window[mapLocation.callback]();
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
                      }
                    });
                  });
                }
              } else {
                if (mapLocation.onChapterEnter) {
                  mapLocation.onChapterExit.forEach(setLayerOpacity);
                }
              }
            }
          }
        });
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
                [bounds._sw.lng, bounds._sw.lat]
              ]
            ]
          }
        }
      ]
    };

    // if (initLoad) {
    //   addInsetLayer(boundsJson);
    //   initLoad = false;
    // } else {
    //   updateInsetLayer(boundsJson);
    // }
  }
}

document.addEventListener("DOMContentLoaded", () => {
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
    auto: false
  };
  const map1Locations = [
    {
      mapAnimation: "flyTo",
      rotateAnimation: false,
      rotationDirection: "CW",
      callback: "",
      centerLocation: {
        center: [104.05045, 30.63413],
        zoom: 7,
        pitch: 45.0,
        bearing: 0.0,
        speed: 0.4
      }
    },
    {
      mapAnimation: "flyTo",
      rotateAnimation: false,
      rotationDirection: "CCW",
      callback: "",
      centerLocation: {
        center: [108.60672, 21.96117],
        zoom: 9,
        pitch: 51.5,
        bearing: -164.82,
        speed: 0.4
      }
    },
    {
      mapAnimation: "flyTo",
      rotateAnimation: false,
      rotationDirection: "CW",
      callback: "",
      centerLocation: {
        center: [106.63345, 20.77809],
        zoom: 8,
        pitch: 44.0,
        bearing: -34.4,
        speed: 0.4
      }
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
      callback: "",
      // centerLocation: {
      //   center: [106.13925, 11.06713],
      //   zoom: 10.26,
      //   pitch: 7.5,
      //   bearing: 0.0
      // }
      boundsLocation: {
        bounds: [
          [106.064149, 10.995806],
          [106.244051, 11.143047]
        ],
        fitBoundsOptions: {
          maxZoom: 10,
          zoom: 10.33,
          pitch: 39.5,
          bearing: 0.0,
          speed: 0.4
        }
      }
    },
    {
      mapAnimation: "flyTo",
      rotateAnimation: false,
      rotationDirection: "CW",
      callback: "",
      centerLocation: {
        center: [104.90091, 11.58829],
        zoom: 7.61,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.4
      }
    }
  ];

  mapboxGL(map1Config, map1Locations);
});
