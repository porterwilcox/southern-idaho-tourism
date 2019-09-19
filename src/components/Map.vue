<template>
  <div class="map-box" id="map-box"></div>
</template>

<script>
import MapBoxGL from "mapbox-gl";

let map;

export default {
  name: "map-box",
  mounted() {
    map = new MapBoxGL.Map({
      container: "map-box",
      style: "mapbox://styles/mapbox/satellite-streets-v10",
      center: [40.712776, -74.005974],
    //   center: [42.56318, -114.46028],
      zoom: 12,
      accessToken: "pk.eyJ1IjoiaWFtcG9ydGVyIiwiYSI6ImNrMHBmd2hqYTA0cHIzbXBoMDhyeWFrbTAifQ.pXNhzNQWYK-0aP8h78VzEg"
    });
  },
  props: [],
  data() {
    return {
      features: {
        outdoor: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {
                Name: "Shoshone Falls",
                Address: "4155 Shoshone Falls Grade, Twin Falls, ID 83301"
              },
              geometry: { type: "Point", coordinates: [42.59507, -114.40064] }
            },
            {
              type: "Feature",
              properties: {
                Name: "Twin Falls City Park",
                Address: "400 Shoshone St E, Twin Falls, ID 83301"
              },
              geometry: { type: "Point", coordinates: [42.5582, -114.4659] }
            }
          ]
        },
        FoodAndDrink: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {
                Name: "9 Beans and a Burrito",
                Address: "764 Cheney Dr, Twin Falls, ID 83301"
              },
              geometry: { type: "Point", coordinates: [42.57176, -114.6183] }
            },
            {
              type: "Feature",
              properties: {
                Name: "Koto Brewing Co",
                Address: "156 Main Ave W., Twin Falls, ID 83301"
              },
              geometry: { type: "Point", coordinates: [42.57846, -114.6099] }
            }
          ]
        }
      }
    };
  },
  computed: {},
  methods: {},
  components: {}
};
</script>

<style scoped>
#map-box {
    height: 50vh;
}
</style>