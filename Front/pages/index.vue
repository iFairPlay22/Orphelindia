<template>
  <div>
    
    <MastTitle :title="mainTitle.title" :keywords="mainTitle.keywords"/>

    <!-- Padding de 1 case / 12 -->
    <v-row justify="center" align="center" >
      <v-col :md="10" :xs="12">

        <!-- Pour chaque block d'une certaine taille -->
        <v-row justify="center" align="center">
          <v-col v-for="({ title, img, to, size }, i) in blocks" :key="i" :md="size.cols" :sm="6" :cols="12">

            <!-- On affiche le block -->
            <v-hover v-slot="{ hover }">
              <v-card flat :elevation="hover ? 20 : 5" :to="to" style="border-radius: 10px;">
                <v-img
                  :src="img"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="260px"
                >
                  <v-card-title v-text="title"></v-card-title>
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
import MastTitle from '@/components/common/MastTitle'

export default {
    name: "IndexPage",
    head: { titleTemplate: '%s - Home' },
    components: { MastTitle }
}
</script>