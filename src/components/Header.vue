<template>
  <header><span class="logo">{{name}}</span></header>
</template>
<script>
export default {
  name: "Header",
  props: {
    name: String
  }
};
</script>

<style scoped>
header {
    width: 100%;
    height: 4em;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
}

.logo {
    margin:1em;
    font-size: 1.5em;
    font-weight: bold;
}
</style>