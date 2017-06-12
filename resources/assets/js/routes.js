import Vue from 'vue';
import VueRouter from 'vue-router';

let routes = [
    /**
     * Arrel
     */
    {
        path: '/',
        component: require('./views/Inici'),
        name: 'Inici',
        meta: {
            title: 'Inici',
        }        
    },
    {
        path: '/perfil',
        component: require('./views/Perfil'),
        name: 'Perfil',
        meta: {
            title: 'Perfil',
        }        
    },    
];

export default new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'is-active',
});