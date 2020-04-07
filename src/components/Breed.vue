<template>
  <div >
    <p>{{dog}}</p>
  </div>
</template>

<script>
export default {
  name: 'Breed',
  props:[ 'dog' ],
  methods: {
    toDogList () {
      this.$router.push('dogList')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
