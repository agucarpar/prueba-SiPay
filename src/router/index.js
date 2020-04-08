import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from ''
// import DogList from ''
// import Breed from ''

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/views/Home.vue")
  },
  {
    path:'/dogList',
    name: 'dogList',
    component: () => import("@/views/DogList.vue")
  },
  {
    path:'/breed',
    name: 'breed',
    component: () => import("@/views/Breed.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
