<template>
  <div v-if="headerData">
    <v-app-bar
      fixed
      app
    >
      <v-card to="/" flat color="transparent" class="d-flex pa-2 rounded">
        <v-img
          :src="baseUrl + headerData.logo"
          cover
          max-width="30px"
          max-height="30px"
        />
        <v-toolbar-title class="pl-2 text-decoration-underline">
          <EditableText
            :text="headerData.title"
            :inline="false"
          />
        </v-toolbar-title>
      </v-card>

      <v-spacer />

      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group>
          <v-list-item v-for="({ icon, text, to }, i) in headerData.links" :key="i" :to="to">
            <v-list-item-icon class="mr-2">
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="pa-0 ma-0"> 
              <EditableText
                :text="text"
                :inline="true"
              />
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

import EditableText from "@/components/text/EditableText";

export default {
    name: "MastHead",
    components: { EditableText },
    computed: {
      headerData() {
        return this.storedData ? this.storedData.header : null
      },
      ...mapGetters({
        baseUrl: "http/getBaseUrl",
        storedData: "http/getStoredData"
      })
    },
    data() {
      return {
        drawer: false
      }
    }
}
</script>

<style>

</style>