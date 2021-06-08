<template>
  <div id="app">
    <Getters></Getters>
    <Mutation></Mutation>
    <Actions></Actions>
    <Module></Module>
  </div>
</template>
<script>
import Getters from "./components/Getters";
import Actions from "./components/Actions";
import Mutation from "./components/Mutation";
import Module from "./components/Module";
export default {
  name: "App",
  data() {
    return {};
  },
  components: { Getters, Actions, Mutation, Module },
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
