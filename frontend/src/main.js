import Vue from 'vue'
import App from './App'
import router from './router'

import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";
import store from './store/index'
import VeeValidate from 'vee-validate';
import Vuetify from 'vuetify'


Vue.config.productionTip = false
Vue.use(PaperDashboard);
Vue.use(VeeValidate);
Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
