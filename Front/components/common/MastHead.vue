<template>
  <div>
    <v-app-bar
      fixed
      app
    >
      <v-card to="/" flat color="transparent" class="d-flex pa-2 rounded">
        <v-img
          :src="logo"
          cover
          max-width="30px"
          max-height="30px"
        />
        <v-toolbar-title class="pl-2 text-decoration-underline" v-text="title" />
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
          <v-list-item v-for="({ icon, text, to }, i) in links" :key="i" :to="to">
            <v-list-item-icon class="mr-2">
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="pa-0 ma-0"> {{ text }} </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
    name: "MastHead"
}
</script>

<style>

</style>