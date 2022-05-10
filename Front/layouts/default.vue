<template>
  <div id="app">
    <v-app light>
      
      <MastHead/>

      <v-main>
        <v-container class="py-10">
          <Nuxt />
        </v-container>
      </v-main>

      <MastFoot/>
    </v-app>
  </div>
</template>

<script>
import MastHead from "@/components/common/MastHead"
import MastFoot from "@/components/common/MastFoot"

export default {
    name: "DefaultLayout",
    components: { MastHead, MastFoot },
}
</script>
