require('./bootstrap');

window.Vue = require('vue').default;
Vue.config.productionTip = false;

import App from './App'
import router from './router'
import store from './store'


// Plugins
import Vuelidate from 'vuelidate'
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import MaterialDashboard from "./material-dashboard";

// CSS
import '@/sass/app.css'
import '@/sass/page-example-common-style.css'
import '@/sass/admin.scss'

Vue.use(Vuelidate)
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(MaterialDashboard);

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
