<template>
  <span
    :class="'.text ' +  (inline ? 'd-inline' : 'd-block')"
    :contenteditable="isAdmin"
    @focus="focus"
    @blur="blur"
    v-html="formattedText"
  >
  </span>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "EditableText",
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
      currentLanguage: "http/getCurrentLang"
    }),
    formattedText() {
      return this.text && this.text[this.currentLanguage]
        ?this.text[this.currentLanguage].slice().replace(/(?:\n)/g, "<br>")
        : "";
    },
  },
  data() {
    return {
      oldText: "",
    };
  },
  methods: {
    getText(e) {
      return e.target.innerHTML;
    },
    focus(e) {
      this.oldText = this.getText(e);
    },
    blur(e) {
      const oldText = this.oldText;
      const newText = this.getText(e);

      if (oldText != newText) {
        this.modifyString(newText);
      }
    },
    modifyString(newText) {
      if (this.requireSuperAdmin ? this.isSuperAdmin : this.isAdmin)
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
    },
    ...mapActions({
      httpReq: "http/httpReq",
    }),
  },
};
</script>
