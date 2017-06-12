/**
 * Importacions
 */
import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import router from './routes.js';

/**
 * Llibreries a utilitzar
 */
Vue.use(Vuex);
Vue.use(VueResource);

/**
 * Tots els atributs
 * @type {Object}
 */
const state = {
    baseURL: 'https://api.github.com/users',
    value: 0,
    profile: [],
}

/**
 * Getters
 * @type {Object}
 */
const getters = {
    state: state => state,
}

/**
 * Mutacions als valors, commits
 * @type {Object}
 */
const mutations = {
    getProfile(state) {
        Vue.http.get(state.baseURL + '/Ismaaa').then(response => {
            state.profile = response.data;
        }, response => {
            console.log(response)
        });
    },    
}

/**
 * Exportem el que ens faci falta
 */
export default new Vuex.Store({
    state,
    getters,
    mutations,
});