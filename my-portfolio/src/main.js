import Vue from 'vue'
import App from './App.vue'
require('@/assets/main.scss');

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

library.add(faLinkedin);
library.add(faGithubSquare);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

let app = new Vue({
  render: h => h(App),
  components: { App },
  data: {hello: "ok"}
})

app.$mount('#app')

console.log("main.js: App mounted")
