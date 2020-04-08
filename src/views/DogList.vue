<template>
  <div>
    <header> <p>Dog List</p> </header>
      <div>
          <input type="search" placeholder="Search your favourite breed here" v-model="query">
          <Breed v-for="(dog, key) in filteredList"  :dog="dog" :key="key"></Breed>
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
      return this.dogsList.filter(dog=>{
        return dog.includes(this.query)
        })
    }
  }, 
  created () {
    this.callDogList()
  }
}
</script>

