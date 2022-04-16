import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        name: 'Home',
        path: '/home',
        component: () => import('../views/Home'),
        children: []
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
    },
    {
        name: 'AdminMain',
        path: '/adminMain',
        component: () => import('../admin/AdminMain'),
        redirect: '/userList',
        children: [
            {
                name: 'UserList',
                path: '/userList',
                component: () => import('../admin/UserList')
            },
            {
                name: 'EditUser',
                path: '/editUser',
                component: () => import('../admin/EditUser')
            },
            {
                name: 'CategoryList',
                path: '/categoryList',
                component: () => import('../admin/CategoryList')
            },
            {
                name: 'EditCategory',
                path: '/editCategory',
                component: () => import('../admin/EditCategory')
            },
            {
                name: 'ArticleList',
                path: '/articleList',
                component: () => import('../admin/ArticleList')
            },
            {
                name: 'EditArticle',
                path: '/editArticle',
                component: () => import('../admin/EditArticle')
            }
        ]
    }

];

const router = new VueRouter({
    routes,
    linkExactActiveClass: 'active'
});

router.beforeEach((to, from, next) => {
    if (to.name === 'Home' && to.params.isAdmin) {
        next('/adminMain');
    } else {
        next();
    }
})

export default router;
