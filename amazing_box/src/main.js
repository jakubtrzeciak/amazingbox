import Vue from 'vue';
import vueDebounce from 'vue-debounce';
import VueScrollTo from 'vue-scrollto';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { func } from '../public/func';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueScrollTo);
Vue.use(vueDebounce, {
  listenTo: 'input',
});
Vue.use(VueAxios, axios);

Vue.prototype.$func = func;
Vue.prototype.$modal = '';

new Vue({
  router,
  render(h) { return h(App); },
}).$mount('#app');
