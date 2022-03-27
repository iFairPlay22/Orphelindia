<template>
  <div>
    <MastTitle
      :title="descriptionPart.title"
    />

    <LeafletMap
        :locations="mapPart.locations"
        :mapCenter="mapPart.mapCenter"
    />
  </div>
</template>

<script>
import MastTitle from '@/components/common/MastTitle'
import LeafletMap from '@/components/map/LeafletMap.vue';

export default {
    name: "AroundTheWorld",
    head: { titleTemplate: '%s - Around the world' },
    components: { MastTitle, LeafletMap },
    data () {
        return {
            descriptionPart: {
              title: "Orphelindia, around the world 🛫",
            },
            mapPart: { 
              mapCenter: [-20.348404, 57.552152 ],
              locations: [ 
                { 
                  coords: [ -20.328404, 57.552152 ],
                  title : "Place 1",
                  shortDescription: "Hahhaha.",
                },
                { 
                  coords: [ -20.448404, 57.552152 ],
                  title : "Place 2",
                  shortDescription: "Hahhaha.",
                },
                { 
                  coords: [ -20.358404, 57.452152 ],
                  title : "Place 3",
                  shortDescription: "Hahhaha.",
                },
              ]
            }
        }
    }
}
</script>