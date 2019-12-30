import Vue from 'vue'
import App from './App.vue'
import ConfirmDialog from './lib'
import BaseDialog from 'base-dialog'
Vue.config.productionTip = false
Vue.use(ConfirmDialog)
Vue.use(BaseDialog)
new Vue({
  render: h => h(App)
}).$mount('#app')
