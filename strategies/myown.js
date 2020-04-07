export default class MyOwnScheme {
  constructor(auth, options) {
    this.$auth = auth
    this.name = options._name

    this.options = options
  }

  mounted() {
  }

  async login() {
    this.fetchUser()
  }

  async fetchUser() {
    this.$auth.setUser({
      username: 'Your Name',
      role: 'ADMIN'
    })
  }

  async logout() {
    return this.$auth.reset()
  }
}
