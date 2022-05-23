<template>
    <v-row justify="center" align="center" >
      <v-col sm="10" xs="12" class="px-0">
        <v-card flat color="transparent">
          
          <v-card-title :class="'custum-font-1 custum-title d-flex ' + alignment">
            <EditableText
                :text="title"
                :inline="false"
            />
          </v-card-title>
          
          <v-card-subtitle v-if="keywords && keywords.length != 0" class="custum-font-1 pt-3 subtitle d-flex justify-center pt-1 text-uppercase">
            <span v-for="(keyword, i) in keywords" :key="i" class="d-flex">
              <v-icon v-if="keyword[currentLanguage] == '.'">mdi-circle-small</v-icon>
              <span v-else class="custum-font-1">
                  <EditableText
                    :text="keyword"
                    :inline="false"
                  />
              </span>
            </span>
          </v-card-subtitle>

        </v-card>
      </v-col>
    </v-row>
</template>

<script>
import EditableText from "@/components/text/EditableText"
import { mapGetters, mapMutations, mapActions } from "vuex"

export default {
    name: "MastTitle",
    components: { EditableText },
    props: { 
        title: {
            id: Number,
            fr: String,
            en : String
        },
        alignment: {
            type: String,
            default: 'justify-center',
        },
        keywords: {
            type: Array,
            default: null,
        }
    },
    computed: {
      ...mapGetters({
        currentLanguage: "http/getCurrentLang"
      })
    },
}
</script>

<style>

</style>