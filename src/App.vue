<template>
    <div id="app">
        <nav-bar></nav-bar>
        <router-view/>
        <bottom-bar></bottom-bar>
    </div>
</template>

<script>
    import NavBar from "@/components/NavBar";
    import BottomBar from "@/components/BottomBar";

    export default {
        name: 'App',
        components: {NavBar, BottomBar},
        methods: {
            isMobile: function () {
                const ua = navigator.userAgent;
                return ((ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1) ||
                    (!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)));
            }
        },
        beforeMount() {
            if (this.isMobile()) {
                this.$('body').css('font-size', '12px');
            }
        }
    }
</script>

<style>

</style>
