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
        <div class="display-2">Welcome {{this.$auth.user.username}}</div>
        <a @click="moveTo('/secret')">Secret page</a>
      </div>
      <div>
        <v-divider class="divider"></v-divider>
      </div>
      <div>
        <v-btn @click="logout">Logout</v-btn>
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
    logout() {
      this.$auth.logout()
    }
  }
}
</script>
<style>
  .divider {
    margin: 1em;
  }
</style>
