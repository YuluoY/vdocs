import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import axios from "./axios";
import VueMarkdownEditor from "@kangc/v-md-editor";
import "@kangc/v-md-editor/lib/style/base-editor.css";
import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress";
import "@kangc/v-md-editor/lib/theme/style/vuepress.css";
import Prism from "prismjs";
import "prismjs/components/prism-json";
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import jquery from 'jquery';
import './assets/scss/style.scss'
import './assets/css/iconfont.css'
import water from 'vue-waterfall2'
import VueLazyload from "vue-lazyload";
import Navbar from "@/components/Navbar";
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
// 定义一个全局指令
Vue.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
        hljs.highlightBlock(block)
    })
})

VueMarkdownEditor.use(vuepressTheme, {
    Prism,
});
Vue.mixin(import('./mixin'));
Vue.component(Navbar.name, Navbar);
Vue.use(VueLazyload);
Vue.use(water);
Vue.use(ElementUI);
Vue.use(VueMarkdownEditor);
Vue.config.productionTip = false;

Vue.prototype.$axios = axios;
Vue.prototype.$ = jquery;
new Vue({
    store,
    axios,
    router,
    render: (h) => h(App),
}).$mount("#app");
