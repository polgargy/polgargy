<template>
  <section
    id="services"
    class="border-bottom">
    <!-- <h3>Szolgáltatások</h3> -->

    <div class="container">
      <div class="row">
        <div
          v-for="s in services"
          :key="s.id"
          class="col-12 col-md text-center mb-4">
          <i
            :class="s.icon"
            class="mb-4"/>
          <p>{{ s.text.hu }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      services: 'texts/getServices'
    })
  }
}
</script>
