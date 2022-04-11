import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        navbar: {
            logo: require('@/assets/logo.png'),
            name: '雨落',
            navInfo: ['Home', 'Article', 'Note', 'TimeLine', 'Category', 'Log', 'About', 'GitHub']
        }
    },
    mutations: {},
    actions: {},
    modules: {},
});
