import { RouteRecordRaw } from 'vue-router';

const loadPage = (page: string) => {
  return () => import(`@/pages/${page}Page.vue`)
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'me',
    component: loadPage('Me'),
    meta: { title: 'Me' }
  },
  {
    path: '/:pathMatch(.*)*', name: '404', component: loadPage('404'),
    meta: { title: 'Page Not Found' }
  },
]

export default routes;