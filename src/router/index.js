import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import DogList from '@/views/DogList.vue'
import Breed from '@/components/Breed.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/dogList',
    name: 'dogList',
    component: DogList
  },
  {
    path:'/breed',
    name: 'breed',
    component: Breed
  }
]

const router = new VueRouter({
  routes
})

export default router
