<template>
    <v-row justify="center" align="center" >
      <v-col cols="10" md="8">
        <v-card flat color="transparent">
          
          <v-card-title :class="'display-2 d-flex ' + alignment" v-text="title"/>
          
          <v-card-subtitle v-if="keywords && keywords.length != 0" class="subtitle d-flex justify-center pt-1 text-uppercase">
            <span v-for="(keyword, i) in keywords" :key="i" class="d-flex">
              <v-icon v-if="keyword == '.'">mdi-circle-small</v-icon>
              <span v-else v-text="keyword"/>
            </span>
          </v-card-subtitle>

        </v-card>
      </v-col>
    </v-row>
</template>

<script>
export default {
    name: "MastTitle",
    props: { 
        title: {
            type: String,
            default: '',
        },
        alignment: {
            type: String,
            default: 'justify-center',
        },
        keywords: {
            type: Array,
            default: null,
        }
    }
}
</script>

<style>

</style>