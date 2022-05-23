<template>
  <v-footer 
    v-if="footerData"
    absolute
    app
  >
    <span> &copy; <EditableText :text="footerData.title" :inline="true" /> {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

import EditableText from "@/components/text/EditableText";

export default {
    name: "MastFoot",
    components: { EditableText },
    computed: {
        footerData() {
          return this.storedData ? this.storedData.footer : null
        },
        ...mapGetters({
          storedData: "http/getStoredData"
        })
      },
}
</script>

<style>

</style>