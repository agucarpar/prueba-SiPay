<template>
<div>
  <main class="wrapper">
    <p id="breed" class="breed" @click ="callImages(dog)">{{dog}}</p>
    <div v-if="showImagesToggle" id="arrayPictures" >
      <img v-for="(pic, key) in arrayPictures" :src="pic" alt="" :key="key" width="200" height="150">
      <div class="button-group">
        <button @click="modifySplice(dog, 'incre')">Next 10 Pictures</button>
        <button @click="modifySplice(dog)">Previus 10 Pictures</button>
      </div>
    </div>
  </main>
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
      arrayPictures: [],
      initialSplice: 0,
      showNextButton: true
    }
  },
  methods: {
   callImages(dog) {
      this.showImagesToggle = !this.showImagesToggle
      if(this.showImagesToggle) this.callingBreedImages(dog)
    },
    async  callingBreedImages (breed) {
      let listPictures = await apiDog.methods.getBreedImages(breed)
      this.arrayPictures = listPictures.lenght < 10 ? listPictures : listPictures.splice(this.initialSplice, 10)
    },
    modifySplice (breed, order) {
      order ? this.initialSplice += 10 : this.initialSplice -= 10
      this.callingBreedImages(breed)
    },
    
  }
}
</script>
<style scoped>
  .wrapper {
    margin: 10px;
    padding: 10px;
    border-radius: 10%;
    border: 1px solid rgb(212, 0, 255);
    background-color: khaki;
  }
  .wrapper:hover {
    color:blue;
    cursor:pointer;
  }
  img {
    margin:5px
  }
  button {
   margin-top: 25px;
   border-radius:10%;
   font-size: 21px;
   padding: 3px;
  }
  .button-group {
    display: flex;
    justify-content: space-evenly;
  }
</style>