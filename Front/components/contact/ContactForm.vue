<template>
  <v-row
    align="center"
  >
    <v-col md="8" offset-md="2" sm="10" offset-sm="1" xs="12" offset-xs="0" class="px-0">
      <v-card color="transparent" flat light>
        <v-card-text class="pt-0">
          <v-form v-model="form.valid" ref="contactForm">
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="6" class="px-0">
                  <v-text-field
                    required
                    :label="form.params.firstName.txt"
                    v-model="form.values.firstName"
                    :rules="form.rules.firstName"
                    :counter="form.params.firstName.max"
                  />
                </v-col>
                <v-col cols="12" sm="6" md="6" class="px-0">
                  <v-text-field
                    required
                    :label="form.params.lastName.txt"
                    v-model="form.values.lastName"
                    :rules="form.rules.lastName"
                    :counter="form.params.lastName.max"
                  />
                </v-col>
                <v-col cols="12" class="px-0">
                  <v-text-field
                    required
                    :label="form.params.email.txt"
                    v-model="form.values.email"
                    :rules="form.rules.email"
                    :counter="form.params.email.max"
                  />
                </v-col>
                <v-col cols="12" class="px-0">
                  <v-text-field
                    required
                    :label="form.params.title.txt"
                    v-model="form.values.title"
                    :rules="form.rules.title"
                    :counter="form.params.title.max"
                  />
                </v-col>
                <v-col cols="12" class="px-0">
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
        <v-card-actions class="mr-2">
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
                " must contains more than " +
                paramValue.min +
                " characters."
          );
        }

        if (paramValue.max) {
          rules[paramName].push(
            (v) =>
              (!!v && v.length <= paramValue.max) ||
              paramValue.txt +
              " must contains less than " +
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

      this.$refs.contactForm.validate();
      if (this.form.valid) {

       const fetchBody = {
        user_id: "0V6GamAUoqRFddizD",
        service_id: "orphelindia_service",
        template_id: "orphelindia_new_message",
        template_params: { 
          from_name: this.form.values.firstName + " " + this.form.values.lastName,
          from_email: this.form.values.email,
          object: this.form.values.title,
          message: this.form.values.message,
      }};

      fetch("https://api.emailjs.com/api/v1.0/email/send", {
          "headers": {
              "Content-Type": "application/json",
          },
          "body": JSON.stringify(fetchBody),
          "method": "POST",
          "mode": "cors"
      })
          .then(response => response.text())
          .then(response => {
            if (response == "OK") {
              this.onMessageSent();
            } else {
              this.onMessageNotSent();
            }
          })
          // KO
          .catch(error => {
            this.onMessageNotSent();
          });
      }
    },
    onMessageSent() {
      this.$refs.contactForm.reset();
      this.$swal({
        icon: "success",
        title: "Message sent!",
        text: "Thanks for your feedback 😊",
        button: "OK"
      });
    },
    onMessageNotSent() {
      this.$swal({
        icon: "error",
        title: "Message not sent 😒",
        text: "The message can't be sent at the moment. Please try again later.",
        button: "OK"
      });
    }
  },
};
</script>
