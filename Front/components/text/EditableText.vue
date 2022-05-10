<template>
  <span
    :class="inline ? 'd-inline' : 'd-block'"
    :contenteditable="requireSuperAdmin ? isSuperAdmin : isAdmin"
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
        id: string,
        en: string,
        fr: string,
      }, 
      inline : string
  },
  computed: {
    ...mapGetters({
      isAdmin: "http/isLoggedAsAdmin",
      isSuperAdmin: "http/isLoggedAsSuperAdmin",
      currentLanguage: "http/getCurrentLang",
      appData: "http/getAppData"
    }),
    formattedText() {
      return this.text && this.text.string
        ? this.text.string.slice().replace(/(?:\n)/g, "<br>")
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
          url: `admin/resx/modify/${this.text.id}`,
          data: {
            newText: newText,
          },
          fetchCallback: (response) => {
            if (response === true) {
              this.$swal({
                icon: "success",
                title:
                  this.appData.swalMessageTitleTextUpdateSuccess.string,
                text:
                  this.appData.swalMessageDescriptionTextUpdateSuccess.string,
                button: "OK",
              });
            } else {
              this.$swal({
                icon: "error",
                title:
                  this.appData.swalMessageTitleTextUpdateFailure.string,
                text:
                  this.appData.swalMessageDescriptionTextUpdateFailure.string,
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
