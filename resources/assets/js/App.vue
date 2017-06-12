<template>
    <div>
        <navbar></navbar>
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>  
</template>

<script>
    import Navbar from './components/partials/Navbar'

    export default {
        components: { Navbar },
        data () {
            return {

            };
        }
    };
</script>

<style lang="css" scoped>
    .fade-enter-active, .fade-leave-active {
        transition-property: opacity;
        transition-duration: .25s;
    }

    .fade-enter-active {
        transition-delay: .25s;
    }

    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>