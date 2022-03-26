<template>
  <div>
    <MastTitle
      :title="firstPart.title"
    />

    <ContactForm/>
  </div>
</template>

<script>
import MastTitle from '@/components/common/MastTitle'
import MastText from '@/components/common/MastText'
import ContactForm from '@/components/contact/ContactForm'

export default {
    name: "ContactUs",
    head: { titleTemplate: '%s - Contact us' },
    components: { MastTitle, MastText, ContactForm },
    data () {
        return {
            firstPart: {
              title: "Contact us! ✍️",
            },
        }
    }
}
</script>