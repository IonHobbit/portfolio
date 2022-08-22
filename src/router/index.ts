import { createRouter, createWebHistory, NavigationGuardNext, RouteLocation } from 'vue-router'
import metaWrapper from './meta.wrapper'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to: RouteLocation, from: RouteLocation, next: NavigationGuardNext): void => {
  metaWrapper(to, from);
  next();
})

export default router
