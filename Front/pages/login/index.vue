<template>
  <div v-if="pageData">
    <MastTitle
      :title="pageData.page.firstPart.title"
    />

    <LoginForm
      :params="pageData.page.form"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

import MastTitle from '@/components/common/MastTitle'
import MastText from '@/components/common/MastText'
import LoginForm from '@/components/form/LoginForm'

export default {
    name: "Login",
    head: { titleTemplate: '%s - Login' },
    components: { MastTitle, MastText, LoginForm },
    data() {
      return {
          pageData: null,
      }
    },
    mounted() {
      return this.httpReq({
        pageRequest: true,
        url: `api/admin/pages/login`,
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