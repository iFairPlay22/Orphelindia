<template>
  <div>
      <MastTitle :title="firstPart.title" />

      <MastText :text="firstPart.text" />

        <MastTitle
            :title="events.title"
            alignment="justify-start"
        />

      <List 
            :elements="events.blocks"
            :bigOne="true" 
        />
  </div>
</template>

<script>
import MastTitle from "@/components/common/MastTitle";
import MastText from "@/components/common/MastText";
import List from "../../components/list/List.vue";
export default {
    name: "Events",
    head: { titleTemplate: "%s - Events" },
    components: { MastTitle, MastText, List },
    data() {
        return {
            firstPart: {
                title: "Orphelindia Events ⌚",
                text: "For us the notion of sharing during the collection of donations is very important, having been part of many associative clubs, the notion of sharing was not always present. We want donors, volunteers and active members to feel a connection with these children. That he can feel the fact that their actions for the association are paying off and serve an important cause. That they themselves are important for the future of these children. This is why we want to create events for collecting donations, to share this adventure together and that everyone can feel important within this family that is Orphelindia. Of course when the organization of events will be impossible in places we will find means through networks and online, also helped by product sales."
            },
            events: {
                title: "Main Events",
                blocks: [
                    { 
                        title : "Do some parties 🥳🎈",
                        text: "At the beginning, we are just friends...",
                        img: require("@/assets/images/events/balloons.jpg"),
                    },
                    { 
                        title : "Kiss your best friend 😘",
                        text: "But now, it's Dom's birthday...",
                        img: require("@/assets/images/events/flower.png"),
                    },
                    { 
                        title : "Live your best moments 😎",
                        text: "I love you so muchhhh, and all bla bla bla...",
                        img: require("@/assets/images/events/love.jpg"),
                    },
                    { 
                        title : "Getting married 😋❤️",
                        text: "Oops, Kaktus probably broke something ?",
                        img: require("@/assets/images/events/wedding.png"),
                    },
                    { 
                        title : "And probably more soon! 🙃",
                        text: "Let time tell us...",
                        img: require("@/assets/images/events/wait.png"),
                    }                
                ]
            }
        };
    }
}
</script>

<style>

</style>