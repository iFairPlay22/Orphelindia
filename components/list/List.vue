<template>
  <!-- Padding de 1 case / 12 -->
    <v-row justify="center" align="center" class="pt-5">
      <v-col :xl="10" :md="12" :cols="10">

        <!-- Pour chaque block d'une certaine taille -->
        <v-row justify="start" align="center">

          <v-col offset-xl="6" xl="6" offset="0" cols="12">
            <v-text-field
              outlined
              placeholder="Search something"
              append-icon="mdi-magnify"
              v-model="form.search"
            />
          </v-col>
          <v-col v-for="({ title, text, img }, i) in filteredElements" :key="i"  lg="4" md="6" sm="12" cols="12">
            
            <v-card 
                elevation="5"
                :height="cardHeight"
            >
              <v-img
                :src="img"
                :height="imgHeight + 'px'"
              ></v-img>

              <v-card-title v-text="title"/>
              <v-card-subtitle v-text="text" class="pt-2 text-justify"/>
            </v-card>

          </v-col>
        </v-row>
      </v-col>
    </v-row>
</template>

<script>
export default {
    name: "List",
    props: { 
        elements: Array
    },
    computed: {
      filteredElements() {
        const search = this.form.search.toLowerCase();

        if (!search)
          return this.elements;

        return this.elements.filter(({ title, text }) => {
          return title.toLowerCase().includes(search) || text.toLowerCase().includes(search);
        });
      },
      cardHeight() {

        console.log(this.$vuetify.breakpoint.name)

        if (!this.elements || this.elements.length === 0) {
          return 'auto';
        }

        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'auto';
          case 'sm': return 'auto';
          case 'md': return this.calculateHeight(22, 31);
          case 'lg': return this.calculateHeight(30, 43);
          case 'xl': return this.calculateHeight(39, 56);
        }
      }
    },
    data() {
      return {
        imgHeight: 250,
        form: {
          search: ''
        }
      }
    },
    methods: {
      calculateHeight(minCharactersByTitleLine, minCharactersByTextLine) {

        const sizes = this.elements.map((element) => {

          const pixelsForImage = this.imgHeight;

          const totalPadding = 16*2;
          
          const maxTitleCharacters = element.title.length;
          const maxTitleLines = Math.ceil(maxTitleCharacters / minCharactersByTitleLine);
          const pixelsByTitleLine = 32;

          const maxTextCharacters = element.text.length;
          const maxTextLines = Math.ceil(maxTextCharacters / minCharactersByTextLine);
          const pixelsByTextLine = 22;

          const maxPixelsRequired = pixelsForImage + totalPadding + (maxTitleLines * pixelsByTitleLine) + (maxTextLines * pixelsByTextLine);
          return maxPixelsRequired;

        }) 

        return Math.max(...sizes);        
      }
    }
}
</script>