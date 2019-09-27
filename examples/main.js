import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import kkUi from "../packages/index"
Vue.use(kkUi)

new Vue({
  render: h => h(App),
}).$mount('#app')
