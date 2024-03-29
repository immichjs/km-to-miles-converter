import Vue from 'vue'
import App from './App.vue'
import 'tailwindcss/tailwind.css'
import titleMixin from './mixins/titleMixin.js'

Vue.mixin(titleMixin)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
