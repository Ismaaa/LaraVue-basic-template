<template>
	<section class="section">
		<div class="container">
			<h1>GitHub API profile data -></h1>
			<pre>{{ state.profile }}</pre>
		</div>
	</section>
</template>

<script>

    import store from '../store.js'

	export default {
	    name: 'Perfil',
	    data () {
		    return {

		    };
	    },
	    computed: {
	    	state() {
	    		return store.getters.state
	    	}
	    },
        mounted() {
            store.commit("getProfile")
        }	    
	};
</script>

<style lang="css" scoped>
</style>