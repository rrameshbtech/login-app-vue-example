<template>
  <div id="app">
    <Header name="ThoughtWorks" />
    <section>
      <Login />
    </section>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Login,
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0px;
}
</style>
