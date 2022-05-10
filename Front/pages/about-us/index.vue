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

    <List
      :elements="objectivesPart.blocks"
    />
  </div>
</template>

<script>
import MastTitle from '@/components/common/MastTitle'
import MastText from '@/components/common/MastText'
import List from '@/components/list/List';

export default {
    name: "AboutUs",
    head: { titleTemplate: '%s - About us' },
    components: { MastTitle, MastText, List }
}
</script>