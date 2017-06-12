/**
 * Importem el core
 */
import Vue from 'vue'

/**
 * Router i Vuex
 */
import VueRouter from 'vue-router'
import store from './store'

/**
 * Nom de la instància
 * @type {[instance]}
 */
window.Vue = Vue;

/**
 * Importació de components
 */
import router from './routes' // Rutes

/**
 * Assignem els headers al resource
 */
Vue.http.headers.common['X-CSRF-TOKEN'] = document.getElementsByName('csrf-token')[0].getAttribute('content')

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
    router
});

/**
 * Control de les rutes amb Vue-Router
 * @param  {[object]} (to, from, next [Cap a on va, d'on ve, i la funció next]
 * @return {[router]} [Redireccionem a una ruta]
 */
router.beforeEach((to, from, next) => {
	next()
});