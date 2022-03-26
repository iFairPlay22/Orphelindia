<template>
  <v-row
    align="center"
  >
    <v-col md="8" offset-md="2" cols="10" offset="1">
      <v-card color="transparent" flat light>
        <v-card-text class="pt-0">
          <v-form v-model="form.valid" ref="contactForm">
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    required
                    :label="form.params.firstName.txt"
                    v-model="form.values.firstName"
                    :rules="form.rules.firstName"
                    :counter="form.params.firstName.max"
                  />
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    required
                    :label="form.params.lastName.txt"
                    v-model="form.values.lastName"
                    :rules="form.rules.lastName"
                    :counter="form.params.lastName.max"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    required
                    :label="form.params.email.txt"
                    v-model="form.values.email"
                    :rules="form.rules.email"
                    :counter="form.params.email.max"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    required
                    :label="form.params.title.txt"
                    v-model="form.values.title"
                    :rules="form.rules.title"
                    :counter="form.params.title.max"
                  />
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    required
                    auto-grow
                    outlined
                    clearable
                    :label="form.params.message.txt"
                    v-model="form.values.message"
                    :rules="form.rules.message"
                    :counter="form.params.message.max"
                  ></v-textarea>
                </v-col>
              </v-row>
              <small
                >* Indicates required field</small
              >
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions class="mr-5">
          <v-spacer></v-spacer>

          <v-btn dark class="pr-3 custum-normal-btn" @click="contactUs">
            <v-icon left>mdi-pencil-outline</v-icon>
            Send
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    let params = {
      firstName: {
        txt: "First name",
        min: 2,
        max: 25,
      },
      lastName: {
        txt: "Last name",
        min: 2,
        max: 25,
      },
      email: {
        txt: "Email",
        min: 5,
        max: 25,
      },
      title: {
        txt: "Object",
        min: 2,
        max: 50,
      },
      message: {
        txt: "Message",
        min: 10,
        max: 255,
      },
    };

    return {
      form: {
        valid: false,
        params: params,
        rules: this.getRules(params),
        values: this.getValues(params),
      },
    };
  },
  methods: {
    getRules(params) {
      let rules = {};
      for (const [paramName, paramValue] of Object.entries(params)) {
        rules[paramName] = [
          (v) =>
            !!v ||
            paramValue.txt +
              " is required",
        ];

        if (paramValue.min) {
          rules[paramName].push(
            (v) =>
              (!!v && paramValue.min <= v.length) ||
              paramValue.txt +
                " must be more than " +
                paramValue.min +
                " characters."
          );
        }

        if (paramValue.max) {
          rules[paramName].push(
            (v) =>
              (!!v && v.length <= paramValue.max) ||
              paramValue.txt +
              " must be less than " +
              " characters."
          );
        }
      }
      return rules;
    },
    getValues(params) {
      let values = {};
      for (const [paramName, paramValue] of Object.entries(params)) {
        values[paramName] = "";
      }
      return values;
    },
    contactUs() {

    }
  },
};
</script>
