<template>
  <v-row justify="center" align="center">
    <v-col
      cols="10"
      md="8"
      offset-md="1"
      style="height: 60vw; max-height: 650px; min-height: 350px;"
      class="ma-0 pt-10 pa-0"
    >
      <client-only>
        <l-map
          :zoom="10"
          :center="mapCenter"
          style="z-index: 0 !important"
          class="mx-1"
        >
          <l-tile-layer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          ></l-tile-layer>
          <l-marker
            v-for="({ coords, title, shortDescription }, i) in locations"
            :key="i"
            :lat-lng="coords"
          >
            <l-popup @click="onMarkerClick()">
              <div>
                <h2 class="text-center" v-text="title"/>
                <p class="text-justify" v-text="shortDescription"/>
              </div>
            </l-popup>
          </l-marker>
        </l-map>
      </client-only>
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: "LeafletMap",
  props: { 
      locations: {
        type: Array,
        required: true
      },
      mapCenter: {
        type: Array,
        required: true
      }
  },
  methods: {
    onMarkerClick() {}
  }
};
</script>
