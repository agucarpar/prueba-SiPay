<template>
  <div>
    <header>Dog List</header>
    <main>
      <section>
        <ul v-for="(dog, idx) in dogs" :key="idx">
          <li class="pointer" @click="showImages">{{dog}}</li>
        <div v-if="showImagesToggle">
          <p>Paco</p>
        </div>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
import apiDog from '@/store/apiDog.js'

export default {
  name:'DogList',
  data () {
    return {
      dogs:{},
      showImagesToggle: false
    }
  },
  methods: {
   async callDogList() {
      const list = await apiDog.methods.gettingDogList()
      this.dogs = list
    },
    showImages() {
     this.showImagesToggle = !this.showImagesToggle
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