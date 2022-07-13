const myNameApp = {
  data() {
    return {
      name: 'matheus',
      idade: 30
    }
  }
}

Vue.createApp(myNameApp).mount("#app")