import Vue from 'vue'
import App from './App.vue'
require('@/assets/main.scss');

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin, faGithubSquare, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

library.add(faLinkedin);
library.add(faGithubSquare);
library.add(faGithub);
library.add(faFileDownload);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

let app = new Vue({
  render: h => h(App),
  components: { App },
})

app.$mount('#app')

console.log("main.js: App mounted")
