<template>
  <div>
    <header>Dog List</header>
      <div>
        <ol>
          <li id="breed" class="pointer" @click ="getInner" v-for="(dog, idx) in dogs" :key="idx">{{dog}}</li>
        </ol>
      </div>
  </div>
</template>

<script>
import apiDog from '@/store/apiDog.js'
// import Breed from '@/views/Breed.vue'


export default {
  name:'DogList',
  data () {
    return {
      dogs:{},
      showImagesToggle: false,
      
    }
  },
  // components:{Breed},
  methods: {
   async callDogList() {
      const list = await apiDog.methods.gettingDogList()
      this.dogs = list
    },
    getInner() {
     let breedName = document.getElementById('breed').innerHTML
     console.log(breedName)
    }
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

<style scoped>
  .pointer {
    cursor:pointer;
  }
  .pointer:hover {
    color:blue
  }
</style>