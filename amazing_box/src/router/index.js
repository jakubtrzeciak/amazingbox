import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/kupuj',
    name: 'Sklep',
    component() {
      return import(/* webpackChunkName: "about" */ '../views/Sklep.vue');
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
