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
    components: { MastTitle },
    data() {
        return {
            mainTitle: {
              title: "Orphelindia Association",
              keywords: ["Study", ".", "Help", ".", "World"],
            },
            blocks: [
                {
                    title: "About us",
                    img: require("@/assets/images/home/about.png"),
                    to: "/about-us",
                    size: { cols: "5" }
                },
                {
                    title: "Orphelindia events",
                    img: require("@/assets/images/home/events.png"),
                    to: "/events",
                    size: { cols: "7" }
                },
                {
                    title: "Contact us",
                    img: require("@/assets/images/home/contact.png"),
                    to: "/contact-us",
                    size: { cols: "4" }
                },
                {
                    title: "Donation",
                    img: require("@/assets/images/home/donation.png"),
                    to: "/donation",
                    size: { cols: "4" }
                },
                {
                    title: "Orphenage in the world",
                    img: require("@/assets/images/home/orphenage.png"),
                    to: "/around-the-world",
                    size: { cols: "4" }
                }
            ]
        };
    },
}
</script>