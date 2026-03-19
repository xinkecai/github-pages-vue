import { createRouter, createWebHistory } from 'vue-router'
import Deploy from '../views/HowToDeploy.vue'  // The component displaying your markdown
import Home from '../views/Home.vue'  // The component displaying your markdown

const routes = [
  { path: '/', redirect: '/home' },  // Default route
  { path: '/home', name: 'Home', component: Home },
  { path: '/deploy', name: 'Deploy', component: Deploy },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router