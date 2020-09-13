import Vue from 'vue'
import VueConfetti from 'vue-confetti'

import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.use(VueConfetti)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
