import Vue from 'vue';
import App from './App.vue';
import store from '@/store';
import router from './router';
import '@/assets/style/reset.scss';
// import zyLibraries from 'zy-libraries';
// import 'zy-libraries/lib/entry/style.css'
import './plugins/element.js';
import ModalDialog from './components/modalDialog';
import VueParticles from 'vue-particles';
Vue.use(VueParticles);
Vue.use(ModalDialog, {store, router});
// Vue.use(zyLibraries);


Vue.config.productionTip = false;

//runtime
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
