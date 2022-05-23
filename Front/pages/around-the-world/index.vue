<template>
  <div v-if="pageData">
    <MastTitle
      :title="pageData.page.descriptionPart.title"
    />

    <LeafletMap
        :locations="pageData.page.mapPart.locations"
        :mapCenter="pageData.page.mapPart.mapCenter"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

import MastTitle from '@/components/common/MastTitle'
import LeafletMap from '@/components/map/LeafletMap.vue';

export default {
    name: "AroundTheWorld",
    head: { titleTemplate: '%s - Around the world' },
    components: { MastTitle, LeafletMap },
    data() {
      return {
          pageData: null,
      }
    },
    mounted() {
      return this.httpReq({
        pageRequest: true,
        url: `api/admin/pages/around-the-world`,
        fetchCallback: r => this.pageData = r
      })
    },
    methods: {
      ...mapActions({
        httpReq: "http/httpReq"
      })
    }
}
</script>