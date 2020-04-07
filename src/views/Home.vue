<template>
  <div>
    <header>
      <p>Welcome to my Store</p>
    </header>
    <main>
      <p>Please press the button to see our cute puppies</p>
      <button @click="toDogList">Press to see</button>
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