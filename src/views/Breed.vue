<template>
<div>
    <p id="breed" class="pointer"  @click ="getInner(dog)">{{dog}}</p>
</div>
</template>

<script>
export default {
    name:'Breed',
    props:['dog'],
    data() {
        return {
            query:''
        }
    },
    methods: {
         getInner(animal) {
           document.getElementById('breed').innerText
            console.log(animal)
        }
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