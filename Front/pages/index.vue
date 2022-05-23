<template>
  <div v-if="pageData">
    <MastTitle :title="pageData.page.mainTitle.title" :keywords="pageData.page.mainTitle.keywords"/>
    <!-- Padding de 1 case / 12 -->
    <v-row justify="center" align="center" >
      <v-col :md="10" :xs="12">
        <!-- Pour chaque block d'une certaine taille -->
        <v-row justify="center" align="center">
          <v-col v-for="({ title, img, to, size }, i) in pageData.page.blocks" :key="i" :md="size.cols" :sm="6" :cols="12">
            <!-- On affiche le block -->
            <v-hover v-slot="{ hover }">
              <v-card flat :elevation="hover ? 20 : 5" :to="to" style="border-radius: 10px;">
                <v-img
                  :src="baseUrl + img"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="260px"
                >
                  <v-card-title>
                    <EditableText
                      :text="title"
                      :inline="false"
                    />
                  </v-card-title>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
  
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

import MastHead from "@/components/common/MastHead"
import MastFoot from "@/components/common/MastFoot"
import EditableText from "@/components/text/EditableText"
import MastTitle from '@/components/common/MastTitle'

export default {
    name: "IndexPage",
    head: { titleTemplate: '%s - Home' },
    components: { EditableText, MastTitle, MastHead, MastFoot},
    computed: {
      ...mapGetters({
        baseUrl: "http/getBaseUrl"
      })
    },
    data() {
      return {
          pageData: null,
      }
    },
    mounted() {
      return this.httpReq({
        pageRequest: true,
        url: `api/admin/pages/home`,
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