<template>
  <div :class="'flex-row justify-space-between align-center ' + (inline ? 'd-inline-flex' : 'd-flex')">
    <span class="text"> {{ newText }} </span>

    <v-dialog
      v-model="dialog"
      max-width="600px"
      v-if="isAdmin" 
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn 
          class="ma-2"
          v-bind="attrs"
          v-on.stop="on"
          fab
          x-small
        >
          <v-icon light color="green">mdi-pencil</v-icon>
        </v-btn>      
      </template>

      <v-card>
        <v-card-title class="custum-font-1 custum-title pt-6">
          {{ storedData.common.editableTitle[this.currentLanguage] }}
        </v-card-title>
        <v-card-text class="pb-0">
          <v-container>
            <v-row>
              <v-col cols="12" class="pb-0 pt-5">
                <v-textarea 
                  outlined
                  auto-grow
                  rows="4"
                  row-height="30"
                  shaped
                  class="custum-font-1" 
                  :label="storedData.common.editableTextLabel[this.currentLanguage]" 
                  required 
                  v-model="newText"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-spacer></v-spacer>
          <v-btn
            :class="stringsDiverged ? 'disabled' : 'success'"
            text
            @click="updateStrings"
            :disabled="stringsDiverged"
          >
          {{ storedData.common.editableEditButton[this.currentLanguage] }}
            <v-icon right>mdi-pencil</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

import EditableText from "@/components/text/EditableText";

export default {
  name: "EditableText",
  components: { EditableText },
  props: {
      text : {
        id: Number,
        en: String,
        fr: String,
      }, 
      inline : Boolean
  },
  computed: {
    ...mapGetters({
      isAdmin: "http/isAdmin",
      currentLanguage: "http/getCurrentLang",
      storedData: "http/getStoredData"
    }),
    stringsDiverged() {
      return this.oldText == this.newText
    },
  },
  data() {
    return {
      dialog: false,
      oldText: "",
      newText: ""
    };
  },
  mounted() {
    if (this.text && this.text[this.currentLanguage]) {
      this.oldText = this.text[this.currentLanguage];
      this.newText = this.oldText;
    }
  },
  methods: {
    updateStrings() {

      if (this.stringsDiverged) return ;
      const newText = this.newText;

      if (this.isAdmin)
        this.httpReq({
          url: `api/admin/edit/string`,
          data: {
            stringId: this.text.id,
            value: newText,
          },
          fetchCallback: (response) => {
            if (response === true) {
              this.$swal({
                icon: "success",
                title: "Success",
                text: "Text updated successfully!",
                button: "OK",
              });
              this.oldText = this.newText;
            } else {
              this.$swal({
                icon: "error",
                title: "Error",
                text: "Text not updated!",
                button: "OK",
              });
            }
          },
        });

        this.dialog = false;
    },
    ...mapActions({
      httpReq: "http/httpReq",
    }),
  },
};
</script>
