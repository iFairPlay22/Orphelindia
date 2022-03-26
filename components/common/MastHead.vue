<template>
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

    <v-btn
      icon
      @click.stop=""
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
    name: "MastHead",
    data() {
        return {
            logo : require("@/assets/logos/orphelindia.png"),
            title: "Orphelindia"
        };
    },
}
</script>

<style>

</style>