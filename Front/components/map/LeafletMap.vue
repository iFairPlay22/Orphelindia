<template>
  <v-row justify="center" align="center">
    <v-col
      cols="10"
      md="8"
      offset-md="1"
      style="height: 60vw; max-height: 650px; min-height: 450px;"
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
                <h2 class="text-center"> 
                  <EditableText
                      :text="title"
                      :inline="false"
                  />
                </h2>
                <p class="text-justify"> 
                  <EditableText
                      :text="shortDescription"
                      :inline="false"
                  />
                </p>
              </div>
            </l-popup>
          </l-marker>
        </l-map>
      </client-only>
    </v-col>
  </v-row>
</template>

<script>
import EditableText from "@/components/text/EditableText";

export default {
  name: "LeafletMap",
  components: { EditableText },
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
