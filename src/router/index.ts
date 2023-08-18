import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../view/Home/index.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../view/About/index.vue'),
    },
    {
        path: '/hello-world',
        name: 'Hello World',
        component: () => import('../view/Hello-World/index.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../view/Login/index.vue'),
    },
    {
        path: '/Register',
        name: 'Register',
        component: () => import('../view/Register/index.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;