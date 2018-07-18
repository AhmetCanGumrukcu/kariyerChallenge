import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Detail from './Detail.vue';
import List from './List.vue';

Vue.use(VueRouter);

const routes = [
  {path:"/list", component:List},
  {path:"/detail/:resultId", component:Detail},
  {path:"/", component:List}
];

const router = new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
