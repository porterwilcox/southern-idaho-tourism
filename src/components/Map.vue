<template>
  <div class="map-box position-relative" id="map-box">
    <div class="map-overlay">
      <button @click="collapseCount++" class="btn btn-light ml-2 mt-2" aria-label="toggle menu"
        data-target=".directions-collapsable" data-toggle="collapse">
        <i v-if="collapseCount % 2" class="fas fa-bars"></i>
        <i v-else class="fas fa-times"></i>
      </button>
      <!-- collapse content -->
      <div class="directions-collapsable collapse text-white">
        <h2>Use the line draw tool (top-left) to get step by step directions for where you want to go!</h2>
      </div>
    </div>
  </div>
</template>

<script>
  import MapBoxGL from "mapbox-gl";
  import MapBoxDraw from "@mapbox/mapbox-gl-draw";
  import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
  import MapBoxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.js";
  import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css"
  import { MapBoxAccessToken } from '@/utils/secrets.js'

  import Axios from 'axios'

  //#region NOTE MapBox Api instances
  let map,
    popup = new MapBoxGL.Popup(),
    navControl = new MapBoxGL.NavigationControl({ showZoom: false }),
    drawApi = new MapBoxDraw({
      displayControlsDefault: false,
      controls: {
        line_string: true,
        trash: true
      },
      styles: [
        // Set the line style for the user-input coordinates
        {
          "id": "gl-draw-line",
          "type": "line",
          "filter": ["all", ["==", "$type", "LineString"],
            ["!=", "mode", "static"]
          ],
          "layout": {
            "line-cap": "round",
            "line-join": "round"
          },
          "paint": {
            "line-color": "#438EE4",
            "line-dasharray": [0.2, 2],
            "line-width": 4,
            "line-opacity": 0.7
          }
        },
        // Style the vertex point halos
        {
          "id": "gl-draw-polygon-and-line-vertex-halo-active",
          "type": "circle",
          "filter": ["all", ["==", "meta", "vertex"],
            ["==", "$type", "Point"],
            ["!=", "mode", "static"]
          ],
          "paint": {
            "circle-radius": 8,
            "circle-color": "#FFF"
          }
        },
        // Style the vertex points
        {
          "id": "gl-draw-polygon-and-line-vertex-active",
          "type": "circle",
          "filter": ["all", ["==", "meta", "vertex"],
            ["==", "$type", "Point"],
            ["!=", "mode", "static"]
          ],
          "paint": {
            "circle-radius": 5,
            "circle-color": "#438EE4",
          }
        },
      ]
    }),
    userLocationToggle = new MapBoxGL.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }),
    directionsApi = new MapBoxDirections({
      accessToken: MapBoxAccessToken
    }),
    mapMatchingApi = new Axios.create({
      baseURL: 'https://api.mapbox.com/matching/v5/mapbox/',
      timeout: 3000
    })
  // #endregion

  export default {
    name: "map-box",
    mounted() {
      map = this.initMap()
      map.on('load', () => {
        this.genMapLayers()
        this.initMapControls()
        this.initMapIconsPopup()
      })
      map.on('draw.create', this.updateRoute);
      map.on('draw.update', this.updateRoute);
    },
    props: ["trackUser"],
    data() {
      return {
        collapseCount: 1,
        features: {
          outdoors: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {
                  Name: "Shoshone Falls",
                  Address: "4155 Shoshone Falls Grade, Twin Falls, ID 83301"
                },
                geometry: { type: "Point", coordinates: [-114.40064, 42.59507] }
              },
              {
                type: "Feature",
                properties: {
                  Name: "Twin Falls City Park",
                  Address: "400 Shoshone St E, Twin Falls, ID 83301"
                },
                geometry: { type: "Point", coordinates: [-114.4659, 42.5582] }
              }
            ]
          },
          foodAndDrink: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {
                  Name: "Koto Brewing Co",
                  Address: "156 Main Ave W, Twin Falls, ID 83301"
                },
                geometry: { type: "Point", coordinates: [-114.47104, 42.55655] }
              },
              {
                type: "Feature",
                properties: {
                  Name: "The Anchor Bistro",
                  Address: "334 Blue Lakes Blvd N, Twin Falls, ID 83301"
                },
                geometry: { type: "Point", coordinates: [-114.46031, 42.56786] }
              }
            ]
          }
        }
      };
    },
    computed: {
      centerOfMap() {
        return this.$store.state.center
      }
    },
    methods: {
      initMap(center = false) {
        return new MapBoxGL.Map({
          container: "map-box",
          style: "mapbox://styles/mapbox/satellite-streets-v10",
          center: center ? center : [-114.46028, 42.56318],
          zoom: center ? 15 : 12,
          accessToken: MapBoxAccessToken,
          // hash: true //NOTE if want coords in hashed in url
        });
      },
      genMapLayers() {
        map.addLayer({
          id: 'outdoors',
          type: 'symbol',
          source: {
            type: 'geojson',
            data: this.features.outdoors
          },
          layout: {
            'icon-image': 'picnic-site-15',
            'icon-allow-overlap': true
          }
        });
        map.addLayer({
          id: 'food-and-drink',
          type: 'symbol',
          source: {
            type: 'geojson',
            data: this.features.foodAndDrink
          },
          layout: {
            'icon-image': 'bar-15',
            'icon-allow-overlap': true
          }
        });
      },
      initMapControls() {
        //NOTE User Location - May want to better handle location enable
        map.addControl(userLocationToggle, 'bottom-right');
        userLocationToggle.on('geolocate', (pos) => {
          console.log({ "im-the-pos": pos })

          // NOTE remove location marker from qr coords if activate mapbox's geolocate api
          if (map.getLayer('location')) map.removeLayer('location')

          //NOTE hide geolocate toggle helpers
          document.querySelectorAll('.hide-after-geolocate').forEach(h => h.classList.replace('hide-after-geolocate', 'd-none'))
        })
        userLocationToggle.on('error', e => alert(e.message))

        // NOTE Cardinal directions
        map.addControl(navControl, 'bottom-right');

        // NOTE Directions
        // map.addControl(directionsApi, 'top-left')

        //NOTE Draw on map
        map.addControl(drawApi, 'top-right')
      },
      initMapIconsPopup() {
        map.on('mousemove', function (e) {
          let features = map.queryRenderedFeatures(e.point, { layers: ['outdoors', 'food-and-drink'] });
          if (!features.length) {
            popup.remove();
            return;
          }

          let feature = features[0];

          popup.setLngLat(feature.geometry.coordinates).setHTML(feature.properties.Name).addTo(map);
        })

      },
      // Use the coordinates you drew to make the Map Matching API request
      updateRoute() {
        // Set the profile
        var profile = "driving";
        // Get the coordinates that were drawn on the map
        var data = drawApi.getAll();
        var lastFeature = data.features.length - 1;
        var coords = data.features[lastFeature].geometry.coordinates;
        // Format the coordinates
        var newCoords = coords.join(';')
        // Set the radius for each coordinate pair to 25 meters
        var radius = [];
        coords.forEach(element => {
          radius.push(25);
        });
        this.getMatch(newCoords, radius, profile);
      },

      // Make a Map Matching request
      async getMatch(coordinates, radius, profile) {
        // Separate the radiuses with semicolons
        var radiuses = radius.join(';')
        // Create the query
        var query = profile + '/' + coordinates + '?geometries=geojson&radiuses=' + radiuses + '&steps=true&access_token=' + MapBoxAccessToken
        try {
          let { data: { matchings } } = await mapMatchingApi.get(query)
          if (!matchings.length) return
          let coords = matchings[0].geometry;
          this.addRoute(coords);
          this.getInstructions(matchings[0])
        } catch (error) {
          console.log(error)
        }
      },
      // Draw the Map Matching route as a new layer on the map
      addRoute(coords) {
        // If a route is already loaded, remove it
        if (map.getSource('route')) {
          map.removeLayer('route')
          map.removeSource('route')
        } else { // Add a new layer to the map
          map.addLayer({
            "id": "route",
            "type": "line",
            "source": {
              "type": "geojson",
              "data": {
                "type": "Feature",
                "properties": {},
                "geometry": coords
              }
            },
            "layout": {
              "line-join": "round",
              "line-cap": "round"
            },
            "paint": {
              "line-color": "#03AA46",
              "line-width": 8,
              "line-opacity": 0.8
            }
          });
        };
      },
      getInstructions(data) {
        // Target the sidebar to add the instructions
        var directions = document.querySelector('.directions-collapsable');

        var legs = data.legs;
        var tripDirections = [];
        // Output the instructions for each step of each leg in the response object
        for (var i = 0; i < legs.length; i++) {
          var steps = legs[i].steps;
          for (var j = 0; j < steps.length; j++) {
            tripDirections.push('<br><li>' + steps[j].maneuver.instruction) + '</li>';
          }
        }
        directions.innerHTML = '<br><h2>Trip duration: ' + Math.floor(data.duration / 60) + ' min.</h2>' + tripDirections;
      }
    },
    components: {},
    watch: {
      centerOfMap(center) {
        if (!center.length) return //TODO graceful error handler

        // NOTE before Mapbox.geolocate api
        map.addLayer({
          id: 'location',
          type: 'symbol',
          source: {
            type: 'geojson',
            data: {
              type: "FeatureCollection",
              features: [
                {
                  type: "Feature",
                  properties: {
                    Name: "Your location",
                  },
                  geometry: { type: "Point", coordinates: center }
                }]
            },
          },
          layout: {
            'icon-image': 'marker-15',
            'icon-allow-overlap': true
          }
        })
        map.flyTo({
          center,
          zoom: 15,
          speed: 1,
          curve: 3,
          easing(t) {
            return t;
          }
        });
      },
      trackUser(bool) {
        if (bool) userLocationToggle.trigger()
      }
    }
  };
</script>

<style scoped>
  #map-box {
    height: 80vh;
  }

  .map-overlay {
    position: absolute;
    z-index: 1;
  }

  .directions-collapsable {
    height: 70vh;
    width: 50vw;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 1px 0 5px 3px rgba(0, 0, 0, 0.75);
  }
</style>