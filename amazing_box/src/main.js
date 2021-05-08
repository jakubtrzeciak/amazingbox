import Vue from 'vue';
import vueDebounce from 'vue-debounce';
import VueScrollTo from 'vue-scrollto';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueScrollTo);
Vue.use(vueDebounce, {
  listenTo: 'input',
});

new Vue({
  router,
  render(h) { return h(App); },
}).$mount('#app');
