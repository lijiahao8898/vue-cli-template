import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/pages/index'),
        meta: {
            title: '首页'
        },
        redirect: '/index',
    },
    {
        path: '/index',
        component: () => import('@/pages/index'),
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('@/pages/home/index'),
                meta: {
                    title: '主页'
                },
            },
            {
                path: 'proof-information',
                name: 'proof-information',
                component: () => import('@/pages/proof-information/index'),
                meta: {
                    title: '证明信息'
                },
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/login/index'),
        meta: {
            title: '登录'
        }
    }
];

export default new VueRouter({
    routes
});
