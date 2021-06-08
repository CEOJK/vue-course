<template>
  <div id="app">
    <Mint> </Mint>
    <Popup></Popup>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Mint from "./components/Picker";
import Popup from "./components/Popup";
export default {
  name: "App",
  components: {
    HelloWorld,
    Mint,
    Popup,
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
