/**
 * Importem el core
 */
import Vue from 'vue'

/**
 * Router i Vuex
 */
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store'

/**
 * Nom de la instància
 * @type {[instance]}
 */
window.Vue = Vue

Vue.use(VueRouter)
Vue.use(VueResource)

/**
 * Importació de components
 */
import router from './routes' // Rutes
import App from './App.vue'

/**
 * Assignem els headers al resource
 */
//Vue.http.headers.common['X-CSRF-TOKEN'] = document.getElementsByName('csrf-token')[0].getAttribute('content')

/**
 * Exportació de la instància
 */
export default Vue

/**
 * Creació de la instància Vue amb nom app
 * @type {Vue}
 */
const app = new Vue({
    el: '#app',
    store,
    router,
	render: h => h(App),
});

/**
 * Bulma responsive menu
 */
(function() {
    var burger = document.querySelector('.nav-toggle');
    var menu = document.querySelector('.nav-menu');
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
})();