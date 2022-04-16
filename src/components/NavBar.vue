<template>
    <div id="navbar" class="w-100 bg-white" v-if="">
        <div class="top-bar d-flex jc-between">
            <div class="d-flex ai-center ml-3">
                <router-link to="/" tag="a"><img class="logo ml-3 my-1 bg-grey" :src="nav.logo"></router-link>
                <span class="name fs-lg mx-1">{{ nav.username }}</span>
            </div>
            <div class="nav d-flex ai-center jc-end fs-md text-ellipse">
                <router-link
                        :ref="n"
                        :to="`/${initialChange(n)}`"
                        tag="a"
                        :class="`pr-5`"
                        :title="n"
                        v-for="(n, i) in nav.navInfo" :key="i">
                    <i :class="n==='GitHub'?'iconfont icon-github':''" style="font-size: 1.2rem"></i>
                    {{ n }}
                    <i :class="n==='GitHub'?'iconfont icon-caozuo-wailian':''" style="font-size: 1.2rem"></i>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "Navbar",
        computed: {
            ...mapState({nav: 'navbar'})
        },
        methods: {
            initialChange(text, form = 'lower') {
                let arr = text.split('');
                let initial = arr[0].toLowerCase();
                arr.shift()
                if (form === 'upper') {
                    initial = initial.toUpperCase();
                }
                return initial + arr.join('');
            },
            isMobile: function () {
                const ua = navigator.userAgent;
                return ((ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1) ||
                    (!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)));
            },
        },
        beforeMount() {
            if (this.isMobile()) {
                this.$('html').css('font-size', '9px');
            }
            const userInfo = JSON.parse(localStorage.getItem('vdocs-userInfo'))
            this.$store.commit('setNavbar', userInfo);
        },
    }
</script>

<style lang="scss" scoped>
  #navbar {
    position: sticky; // 顶部导航栏吸顶
    top: 0;
    z-index: 99999999999;
    box-shadow: 0px 0px 20px #A7B1C0;
  }

  .logo {
    width: 4rem;
    border-radius: 50%;
  }

  .nav {
    flex-grow: 1;
  }
  .name{
    text-align: center;
    white-space: nowrap;
  }
  a{
    transition: 0.45s;
  }
</style>