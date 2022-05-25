<template>
  <v-row
    align="center"
  >
    <v-col md="8" offset-md="2" sm="10" offset-sm="1" xs="12" offset-xs="0" class="px-0">
      <v-card color="transparent" flat light>
        <v-card-text class="pt-0">
          <v-form v-model="form.valid" ref="loginForm">
            <v-container>
              <v-row>
                <v-col cols="12" class="px-0">
                  <v-text-field
                    required
                    :label="form.params.pseudo.txt[currentLanguage]"
                    v-model="form.values.pseudo"
                    :rules="form.rules.pseudo"
                    :counter="form.params.pseudo.max"
                  />
                </v-col>
                <v-col cols="12" class="px-0">
                  <v-text-field
                    required
                    :label="form.params.password.txt[currentLanguage]"
                    v-model="form.values.password"
                    :rules="form.rules.password"
                    :counter="form.params.password.max"
                    type="password"
                  />
                </v-col>
              </v-row>
              <small
                >* Indicates required field</small
              >
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions class="mr-2">
          <v-spacer></v-spacer>

          <v-btn dark class="pr-3 custum-normal-btn" @click="tryLogin">
            <v-icon left>mdi-pencil-outline</v-icon>
            <span class="custum-font-1">
              <EditableText
                :text="form.params.btn"
                :inline="false"
              />
            </span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex"

import EditableText from "@/components/text/EditableText"
import { sha256 } from "js-sha256";

export default {
  name: "loginForm",
  components: { EditableText },
  props: {
    params: {
      pseudo: {
        txt: String,
        min: Number,
        max: Number,
        required: true
      },
      password: {
        txt: String,
        min: Number,
        max: Number,
        required: true
      },
      required: true
    }
  },
  computed: {
    form() {
      return {
        valid: false,
        params: this.params,
        rules: this.getRules(this.params),
        values: this.getValues(this.params),
      }
    },
    ...mapGetters({
      currentLanguage: "http/getCurrentLang"
    })
  },
  methods: {
    getRules(params) {
      if (!params) return {}

      let rules = {};
      for (const [paramName, paramValue] of Object.entries(params)) {
        rules[paramName] = [
          (v) =>
            !!v ||
            paramValue.txt[this.currentLanguage] +
              " is required",
        ];

        if (paramValue.min) {
          rules[paramName].push(
            (v) =>
              (!!v && paramValue.min <= v.length) ||
              paramValue.txt[this.currentLanguage] +
                " must contains more than " +
                paramValue.min +
                " characters."
          );
        }

        if (paramValue.max) {
          rules[paramName].push(
            (v) =>
              (!!v && v.length <= paramValue.max) ||
              paramValue.txt[this.currentLanguage] +
              " must contains less than " +
              " characters."
          );
        }
      }
      return rules;
    },
    getValues(params) {
      if (!params) return {}

      let values = {};
      for (const [paramName, paramValue] of Object.entries(params)) {
        values[paramName] = "";
      }
      return values;
    },
    tryLogin() {
      this.$refs.loginForm.validate();
      if (this.form.valid) {
        
        this.httpReq({
          url: `api/connection`,
          data: {
            pseudo: sha256(this.form.values.pseudo),
            password: sha256(this.form.values.password),
          },
          fetchCallback: ({ valid, data }) => {
            if (valid) {
              this.setToken(data);
              this.$refs.loginForm.reset();
              this.onMessageSent();
            }
            else {
              this.onMessageNotSent();
            }
          },
          errorCallback: () => {
            this.onMessageNotSent();
          }
        });
      }
    },
    onMessageSent() {
      this.$swal({
        icon: "success",
        title: "Logged!",
        text: "Logged as admin 😊",
        button: "OK"
      });
    },
    onMessageNotSent() {
      this.$swal({
        icon: "error",
        title: "Not logged 😒",
        text: "Bad credentials.",
        button: "OK"
      });
    },
    ...mapMutations({
      setToken: "http/setToken"
    }),
    ...mapActions({
      httpReq: "http/httpReq",
    }),
  },
};
</script>
