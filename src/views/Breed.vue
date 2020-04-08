<template>
<div>
    <p id="breed" class="pointer" @click ="getInner(dog)">{{dog}}</p>
    <div v-if="showImagesToggle" >
      <img src="" alt="">
    </div>
</div>
</template>

<script>
import apiDog from  '@/store/apiDog.js'

export default {
  name:'Breed',
  props:['dog'],
  data() {
      return {
        query:'',
        showImagesToggle: false,
        breed: '',
        arrayPictures: []
      }
  },
  methods: {
   getInner(dog) {
     this.showImagesToggle = !this.showImagesToggle
     this.breed = document.getElementById('breed').innerText
    console.log(dog)
    },
    async  callingBreedImages () {
       this.arrayPictures = await apiDog.methods.getBreedImages(this.breed)
    }
  },
  watch: {
    showImagesToggle () {
      if(this.showImagesToggle) this.callingBreedImages()
     },
   },
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