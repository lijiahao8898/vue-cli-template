import Vue from 'vue';
import App from './App.vue';
import store from '@/store';
import './plugins/element.js';
import router from './routers';
import '@/assets/style/reset.scss';
import zyLibraries from 'zy-libraries';
import 'zy-libraries/lib/zy-libraries.css'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.use(zyLibraries)

Vue.config.productionTip = false;

//runtime
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
