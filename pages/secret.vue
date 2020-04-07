<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div>
        <div class="display-2">Secret</div>
        <a @click="moveTo('/')">Back to home</a>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import VuetifyLogo from '~/components/VuetifyLogo.vue'

  export default {
    components: {
    },
    methods: {
      moveTo(route) {
        this.$router.push(route)
      }
    }
  }
</script>
