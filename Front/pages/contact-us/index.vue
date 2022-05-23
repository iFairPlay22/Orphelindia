<template>
  <div v-if="pageData">
    <MastTitle
      :title="pageData.page.firstPart.title"
    />

    <ContactForm
      :params="pageData.page.form"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

import MastTitle from '@/components/common/MastTitle'
import MastText from '@/components/common/MastText'
import ContactForm from '@/components/contact/ContactForm'

export default {
    name: "ContactUs",
    head: { titleTemplate: '%s - Contact us' },
    components: { MastTitle, MastText, ContactForm },
    data() {
      return {
          pageData: null,
      }
    },
    mounted() {
      return this.httpReq({
        pageRequest: true,
        url: `api/admin/pages/contact-us`,
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