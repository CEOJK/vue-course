<template>
  <div id="app">
    <h1>TodoList</h1>
    <Todolist></Todolist>
  </div>
</template>

<script>
import Todolist from "./components/Todolist.vue";
export default {
  name: "App",
  components: {
    Todolist,
  },
};
</script>

<style lang="less">
#app {
  margin: 0 auto;
  color: #2c3e50;
  margin-top: 60px;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h1 {
  background-color: Pink;
  text-align: center;
}
</style>
