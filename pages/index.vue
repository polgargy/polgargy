<template>
  <div>
    <About/>
    <Services/>
    <References/>
    <Contact/>
  </div>
</template>

<script>
import About from '@/components/Public/Pages/Home/About.vue'
import Services from '@/components/Public/Pages/Home/Services.vue'
import References from '@/components/Public/Pages/Home/References.vue'
import Contact from '@/components/Public/Pages/Home/Contact.vue'

export default {
  components: {
    About,
    Services,
    References,
    Contact
  },
  head() {
    return {
      bodyAttrs: {
        class: 'home'
      }
    }
  }
}
</script>
