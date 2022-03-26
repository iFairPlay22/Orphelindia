<template>
  <div>
    <MastTitle
      :title="descriptionPart.title"
    />

    <MastText
      :text="descriptionPart.text"
    />

    <MastTitle
      :title="objectivesPart.title"
      alignment="justify-start"
    />

    <!-- Padding de 1 case / 12 -->
    <v-row justify="center" align="center" class="pt-5">
      <v-col :xl="10" :md="12" :cols="10">

        <!-- Pour chaque block d'une certaine taille -->
        <v-row justify="center" align="center">
          <v-col v-for="({ title, text, img }, i) in objectivesPart.blocks" :key="i"  :md="4" :cols="12">
            
            <v-card 
                :height="cardHeight">
              <v-img
                :src="img"
                height="250px"
              ></v-img>

              <v-card-title v-text="title"/>
              <v-card-subtitle v-text="text"/>
            </v-card>

          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MastTitle from '@/components/common/MastTitle'
import MastText from '@/components/common/MastText'

export default {
    name: "AboutUs",
    head: { titleTemplate: '%s - About us' },
    components: { MastTitle, MastText },
    computed: {
      cardHeight() {
        console.log(this.$vuetify.breakpoint.name)
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '';
          case 'sm': return '';
          case 'md': return 550;
          case 'lg': return 475;
          case 'xl': return 450;
        }
      }
    },
    data () {
        return {
            descriptionPart: {
              title: "Who we are? 😊",
              text: "Orphelindia is an association under the law of 1901 which helps orphans in Sri Lanka, India, and Mauritius. The idea of creating this association dates back several years. The orphan cause is particularly close to my heart because my father has been an orphan himself. since he was a child, he had to learn quickly to fend for himself and to miss several years of school for lack of means. He often told me that if he had had someone to push him to go far and study for a long time, he would surely have succeeded even better than he does today. Even though I am proud of everything he has achieved and the path he has taken, I took his words into consideration. So, today I want to be one of the people who will push these children to do their best. but also a person who can give them a taste for school and education, which is, in my opinion, the driving pillar of our society. Education is the most important thing in a child's life, it is a chance that can allow Them to build Their own future."
            },
            objectivesPart: { 
              title: "Our objectives 💪",
              blocks: [ 
                { 
                  title : "First step",
                  text: "To create events that would allow us to collect donations that we will use to buy the necessary materials for the orphanage that we will help, according to their request.  We are currently working on the creation of a website on which it will be possible to find all the information about the association as well as photos of the orphanage in Sri Lanka. We also want to create a way to make an online donation.",
                  img: require("@/assets/images/about-us/first_step.png"),
                },
                { 
                  title : "Provide the necessary",
                  text: "To be able to buy the necessary materials (notebooks, books, tables, tables, etc.) and manage to have them delivered directly to Sri Lanka by buying on markets close to them, such as in India, for example, or to send them directly part of the donations collected by bank transfer (the other part will obviously be used to organise other events).",
                  img: require("@/assets/images/about-us/provide.png")
                },
                { 
                  title : "Meeting",
                  text: "To be able to go to Sri Lanka to see the help Orphelindia is giving in the orphanage, to see how we can continue to help them, and to meet the residents and spend time with them.",
                  img: require("@/assets/images/about-us/meet.png")
                }
              ]
            }
        }
    }
}
</script>