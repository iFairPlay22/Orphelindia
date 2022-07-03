<template>
  <div v-if="headerData">
    <v-app-bar
      fixed
      app
    >
      <v-btn text @click="$router.push('/')">
        <div class="d-flex flex-row justify-around align-center">
          <v-img
            :src="baseUrl + headerData.logo"
            cover
            max-width="30px"
            max-height="30px"
          />
          <div class="pl-2 custum-font-1 custum-bar-title">
            <EditableText
              :text="headerData.title"
              :inline="false"
            />
          </div>
        </div>
      </v-btn>

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
          <v-list-item v-for="({ icon, text, to }, i) in headerData.links" :key="i" @click="$router.push(to)">
            <v-list-item-icon class="mr-2">
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="pa-0 ma-0"> 
              <EditableText
                :text="text"
                :inline="false"
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