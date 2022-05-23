<template>
  <div v-if="pageData">
    <MastTitle
      :title="pageData.page.descriptionPart.title"
    />

    <MastText
      :text="pageData.page.descriptionPart.text"
    />

    <MastTitle
      :title="pageData.page.objectivesPart.title"
      alignment="justify-start"
    />

    <List
      :elements="pageData.page.objectivesPart.blocks"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

import MastTitle from '@/components/common/MastTitle'
import MastText from '@/components/common/MastText'
import List from '@/components/list/List';

export default {
    name: "AboutUs",
    head: { titleTemplate: '%s - About us' },
    components: { MastTitle, MastText, List },
    data() {
      return {
          pageData: null,
      }
    },
    mounted() {
      return this.httpReq({
        pageRequest: true,
        url: `api/admin/pages/about-us`,
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