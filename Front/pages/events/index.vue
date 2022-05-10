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
    components: { MastTitle, MastText, List }
}
</script>

<style>

</style>