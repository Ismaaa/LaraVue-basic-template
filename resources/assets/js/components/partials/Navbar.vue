<template>
    <nav class="nav">
        <div class="nav-left">
            <a class="nav-item">
                <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
            </a>
            <router-link class="nav-item is-tab is-hidden-mobile" to="/" exact>Inici</router-link>
            <router-link class="nav-item is-tab is-hidden-mobile" to="/perfil">Perfil</router-link>
        </div>
        <div class="nav-center">
            <a class="nav-item" href="https://github.com/Ismaaa/LaraVue-basic-template" target="_blank">
                <span class="icon">
                    <i class="fa fa-github"></i>
                </span>
            </a>
        </div>
        <!-- Visible només a móbil -->
        <span class="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
        </span>
        <div class="nav-right">
        	<div class="nav-item">
				<div class="field is-grouped">
			        <p class="control">
			            <a class="button is-primary" href="https://github.com/Ismaaa/LaraVue-basic-template" target="_blank">
				            <span class="icon">
				                <i class="fa fa-download"></i>
				            </span>
				            <span>Descarregar</span>
			            </a>
			        </p> 
			    </div>	
			</div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',
        data () {
            return {

            };
        },
    };
</script>

<style lang="css" scoped>
</style>