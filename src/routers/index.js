import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [{
    path: '/',
    component: () => import('@/pages/login/index'),
    name: 'login',
    meta: {
      title: '登录'
    }
  }, {
    path: '/index',
    component: () => import('@/pages/home/index'),
    name: 'index',
    meta: {
      title: '首页'
    }
  }]
});

export default router;
