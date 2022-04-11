<template>
    <div id="navbar" class="w-100">
        <div class="top-bar d-flex jc-between">
            <div class="d-flex ai-center">
                <router-link to="/" tag="a"><img class="logo ml-3 my-1" :src="nav.logo"></router-link>
                <span class="name fs-lg mx-3">{{ nav.name }}</span>
            </div>
            <div class="nav d-flex ai-center jc-end fs-md">
                <router-link
                        :ref="n"
                        :to="`/${initialChange(n)}`"
                        tag="a"
                        :class="`px-3`"
                        v-for="(n, i) in nav.navInfo" :key="i">
                    <i :class="n==='GitHub'?'iconfont icon-github':''" style="font-size: 1.2rem"></i>
                    {{ n }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "NavBar",
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
            isActive() {
                location.href
            }
        },
        mounted() {
            console.log()
        }
    }
</script>

<style lang="scss" scoped>
  #navbar {
    position: sticky; // 顶部导航栏吸顶
    top: 0;
    z-index: 99;
    background-color: white;
  }

  .logo {
    width: 4rem;
    border-radius: 50%;
  }

  .nav {
    flex-grow: 1;
  }
</style>