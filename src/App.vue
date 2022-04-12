<template>
    <div id="app">
        <nav-bar></nav-bar>
        <router-view/>
    </div>
</template>

<script>
    import NavBar from "@/components/NavBar";

    export default {
        name: 'App',
        components: {NavBar},
        methods: {
            isMobile: function () {
                const ua = navigator.userAgent;
                return ((ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1) ||
                    (!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)));
            }
        },
        beforeMount() {
            if (this.isMobile()) {
                this.$('html').css('font-size', '9px');
            }
        },
    }
</script>

<style>
</style>
