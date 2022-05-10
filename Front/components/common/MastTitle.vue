<template>
    <v-row justify="center" align="center" >
      <v-col sm="10" xs="12" class="px-0">
        <v-card flat color="transparent">
          
          <v-card-title :class="'custum-font-1 custum-title d-flex ' + alignment" v-text="title"/>
          
          <v-card-subtitle v-if="keywords && keywords.length != 0" class="custum-font-1 pt-3 subtitle d-flex justify-center pt-1 text-uppercase">
            <span v-for="(keyword, i) in keywords" :key="i" class="d-flex">
              <v-icon v-if="keyword == '.'">mdi-circle-small</v-icon>
              <span v-else class="custum-font-1" v-text="keyword"/>
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