<template>
<div>
  <p id="breed" class="pointer" @click ="getInner(dog)">{{dog}}</p>
    <div v-if="showImagesToggle" id="arrayPictures" >
      <img v-for="(pic, key) in arrayPictures" :src="pic" alt="" :key="key" width="200" height="150">
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
      arrayPictures: []
    }
  },
  methods: {
   getInner(dog) {
      this.showImagesToggle = !this.showImagesToggle
      if(this.showImagesToggle) this.callingBreedImages(dog)
      console.log('dog:', dog)
    },
    async  callingBreedImages (breed) {
      this.arrayPictures = await apiDog.methods.getBreedImages(breed)
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