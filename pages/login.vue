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
        <div class="display-2">Login</div>
<!--        <a @click="moveTo('/')">Back to home</a>-->
      </div>
      <div>
        <v-divider class="divider"></v-divider>
      </div>
      <div>
        <v-btn @click="login">Login</v-btn>
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
      },
      async login() {
        await this.$auth.loginWith('myown')
      }
    }
  }
</script>
<style>
  .divider {
    margin: 1em;
  }
</style>
