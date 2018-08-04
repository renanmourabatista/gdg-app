import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PostList from '@/components/PostList'
import Login from '@/components/Login'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/home',
            name: 'HelloWorld',
            component: HelloWorld,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/post',
            name: 'PostList',
            component: PostList,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
})

router.beforeEach((to, from, next) => {
    const auth = firebase.auth();
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const isAutenticated = auth.currentUser;
    console.log(isAutenticated);
    if (requiresAuth && !isAutenticated) {
        next('/login');
    } else if (!requiresAuth && isAutenticated) {
        next('/home');
    } else {
        next();
    }
});

export default router
