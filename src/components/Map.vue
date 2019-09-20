<template>
  <div class="map-box" id="map-box"></div>
</template>

<script>
  import MapBoxGL from "mapbox-gl";
  import { MapBoxAccessToken } from '@/utils/secrets.js'

  let map;
  let popup = new MapBoxGL.Popup();

  export default {
    name: "map-box",
    mounted() {
      map = new MapBoxGL.Map({
        container: "map-box",
        style: "mapbox://styles/mapbox/satellite-streets-v10",
        center: [-114.46028, 42.56318],
        zoom: 12,
        accessToken: MapBoxAccessToken
      });
      map.on('load', () => {
        this.genMapLayers()
        this.initMapControls()
        this.initMapIconsPopup()
      })
    },
    props: [],
    data() {
      return {
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
    computed: {},
    methods: {
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
        map.addControl(new MapBoxGL.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true
        }));
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

      }
    },
    components: {}
  };
</script>

<style scoped>
  #map-box {
    height: 80vh;
  }
</style>