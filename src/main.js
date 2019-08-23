import Vue from 'vue';
import App from './App.vue';
import './plugins/element.js';
import router from './routers';
import '@/assets/style/reset.scss';

Vue.config.productionTip = false;

//runtime
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
