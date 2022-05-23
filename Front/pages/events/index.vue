<template>
  <div v-if="pageData">
      <MastTitle :title="pageData.page.firstPart.title" />

      <MastText :text="pageData.page.firstPart.text" />

        <MastTitle
          :title="pageData.page.events.title"
          alignment="justify-start"
        />

      <List 
        :elements="pageData.page.events.blocks"
        :bigOne="true" 
        />
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

import MastTitle from "@/components/common/MastTitle";
import MastText from "@/components/common/MastText";
import List from "@/components/list/List.vue";
export default {
    name: "Events",
    head: { titleTemplate: "%s - Events" },
    components: { MastTitle, MastText, List },
    data() {
      return {
          pageData: null,
      }
    },
    mounted() {
      return this.httpReq({
        pageRequest: true,
        url: `api/admin/pages/events`,
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

<style>

</style>