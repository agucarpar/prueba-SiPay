<template>
  <div >
    <div class="wrapper">
      <header> <h1 class="title">OUR LIST OF BREEDS</h1> </header>
      <div>
        <input type="search" placeholder="Search your favourite breed here" v-model="query">
        <Breed v-for="(dog, key) in filteredList"  :dog="dog" :key="key"></Breed>
      </div>
    </div>
  </div>
</template>

<script>
import apiDog from '@/store/apiDog.js'
import Breed from '@/views/Breed.vue'

export default {
  name:'DogList',
  data () {
    return {
      dogsList:[],
      query:'',
      showImagesToggle: false,
    }
  },
  components:{Breed},
  methods: {
   async callDogList() {
       this.dogsList = await apiDog.methods.gettingDogList()
    },
  },
  computed:{
    filteredList () {
      const query = this.query.toLowerCase()
      return this.dogsList.filter(dog=>{
        return dog.includes(query)
        })
    }
  }, 
  created () {
    this.callDogList()
  }
}
</script>

<style scoped>
.wrapper {
    padding: 20px
}
.title{
  font-size: 70px
}

</style>