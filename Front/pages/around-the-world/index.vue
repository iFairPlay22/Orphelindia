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
    components: { MastTitle, LeafletMap }
}
</script>