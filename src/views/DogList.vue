<template>
    <div class="wrapper">
      <header> 
          <h1 class="title">OUR LIST OF BREEDS</h1> 
          <label for="searchBar">Please, type here for a easy search:</label>
          <input id="searchBar" class="search" type="text" placeholder="Search your favourite breed here" v-model="query">
      </header>
      <main class="main">
          <Breed v-for="(dog, key) in filteredList"  :dog="dog" :key="key"></Breed>
      </main>
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
    width: 100vw;
    height: 100vw;
    padding: 20px;
    box-sizing: border-box;
    background-image: url('../../public/dogList-bg.jpg');
    background-repeat: no-repeat;
}
header {
  color: white;
}
.title{
  font-size: 70px;
}
.search {
  margin-top: 15px;
} 
.search:focus {
  background: rgba(211, 211, 211, 0.63);
}
.main {
  margin: 10px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 4%;
  background-image: url('../../public/wrapr-bg.jpg')
}
</style>