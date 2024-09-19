import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/pages/login.vue'
import Home from '@/pages/home.vue'
import SignUp from '@/pages/signUp.vue'
import { auth } from '@/firebase'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/sign-up',
      name: 'signUP',
      component: SignUp
    },
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.requiresAuth;
  const user = auth.currentUser;

  if (requiresAuth && !user) {
    next('/'); // Redirect to login if not authenticated
  } else {
    next(); // Continue to the route
  }
});




export default router
