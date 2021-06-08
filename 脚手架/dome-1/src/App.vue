<template>
  <div id="app">
    <p>{{ mag1 }}</p>
    <p><button @click="add()">点击增加</button></p>

    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld :msg="mag" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data() {
    return {
      mag: "这是一个vue项目",
      mag1: 0,
    };
  },
  methods: {
    add() {
      this.mag1++;
    },
  },
  components: {
    HelloWorld,
  },
  // 第一阶段 ：从创建到挂载

  beforeCreate() {
    console.log("1.在实例初始化之后,数据监听之前");
  },
  created() {
    console.log("2.实例化完成,挂载阶段还没有开始");
  },

  beforeMount() {
    console.log("3.挂载之前");
  },
  mounted() {
    console.log("4.实例被挂载后调用");
  },
  // 第二阶段:数据更新阶段
  beforeUpdate() {
    console.log("5.数据更新时调用");
  },
  updated() {
    console.log(
      "6.由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。"
    );
  },
};
</script>

<style lang="less">
#app {
}
</style>
