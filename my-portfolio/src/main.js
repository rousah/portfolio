import Vue from 'vue'
import App from './App.vue'
require('@/assets/main.scss');

Vue.config.productionTip = false

let app = new Vue({
  render: h => h(App),
  components: { App },
  data: {hello: "ok"}
})

app.$mount('#app')

console.log("Hello")
