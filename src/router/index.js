import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Recipe from '../views/Recipe.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recipes/:id',
    name: 'recipe',
    component: Recipe,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
