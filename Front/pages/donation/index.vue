<template>
  <div v-if="pageData">
        <MastTitle
            :title="pageData.page.firstPart.title"
        />

        <MastText
            :text="pageData.page.firstPart.text"
        />
    </div>  
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

import MastTitle from "@/components/common/MastTitle";
import MastText from "@/components/common/MastText";

export default {
    name: "Donation",
    head: { titleTemplate: "%s - Donation" },
    components: { MastTitle, MastText },
    data() {
      return {
          pageData: null,
      }
    },
    mounted() {
      return this.httpReq({
        pageRequest: true,
        url: `api/admin/pages/donation`,
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