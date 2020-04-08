<template>
  <div>
    <header> <p>Dog List</p> </header>
      <div>
          <Breed v-for="(dog, key) in dogs"  :dog="dog" :key="key"></Breed>
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
      dogs:{},
      showImagesToggle: false,
    }
  },
  components:{Breed},
  methods: {
   async callDogList() {
      const list = await apiDog.methods.gettingDogList()
      this.dogs = list
    },
  },
  watch: {
    showImagesToggle () {
     if(this.showImagesToggle) apiDog.methods.getBreedImages('akita')
    }
  },
  created () {
    this.callDogList()
  }
}
</script>

