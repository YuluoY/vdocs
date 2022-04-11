import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        name: 'Home',
        path: '/home',
        component: () => import('../views/Home')
    },
    {
        name: 'Login',
        path: '/login',
        component: () => import('../views/Login')
    },
    {
        name: 'Register',
        path: '/register',
        component: () => import('../views/Register')
    }
];

const router = new VueRouter({
    routes,
    linkExactActiveClass: 'active'
});

export default router;
