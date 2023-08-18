import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../view/Home/index.vue'),
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../view/About/index.vue'),
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/hello-world',
        name: 'Hello World',
        component: () => import('../view/Hello-World/index.vue'),
        meta: {
            requiresAuth: true,
        }
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
    },
    {
        path: '/logout',
        name: 'Logout',
        component: () => import('../view//Logout/index.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const userJson = localStorage.getItem('user');
    
    if (userJson) {
      const user = JSON.parse(userJson);
      next();
    } else {
      next("/login");
    }
  });
  

export default router;