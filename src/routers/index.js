import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: () => import('@/pages/index'),
    name: 'index',
    meta: {
        title: '首页'
    },
    redirect: '/index',
    children: [{
        path: '/index',
        component: () => import('@/pages/home/index'),
        name: 'home',
        meta: {
            title: '首页'
        },
    }]
}, {
    path: '/login',
    component: () => import('@/pages/login/index'),
    name: 'login',
    meta: {
        title: '登录'
    }
}]

export default new VueRouter({
    routes
});
