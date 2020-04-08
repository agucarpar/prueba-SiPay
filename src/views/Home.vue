<template>
  <div class="wrapper">
    <header>
      <h1>Welcome to my Store</h1>
    </header>
    <main class="main">
      <p>Please press the button to see our cute puppies</p>
      <button @click="toDogList" class="btn">Press to see</button>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    toDogList () {
      this.$router.push('dogList')
    }
  }
}
</script>

<style scoped>
  .wrapper {
    padding: 20px;
    height: 100vh;
    width: 100vw;
    background-image: url('../../public/background.jpg');
    background-size: cover;
  }
  header>h1{
    font-size: 100px;
    color: rgb(12, 17, 70)
  }
  .main {
    margin-top: 100px;
  }
  .main>p {
    font-size: 33px;
    color: white;
  }
  .btn {
    margin-top: 25px;
    border-radius:10%;
    font-size: 21px;
    padding: 3px;
  }
</style>