<template>
  <Header />
  <router-view/>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header
  }
}
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
