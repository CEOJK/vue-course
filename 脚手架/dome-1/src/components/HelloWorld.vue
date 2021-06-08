<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  // 第一阶段 ：从创建到挂载

  beforeCreate() {
    console.log("1.helloworld在实例初始化之后,数据监听之前");
  },
  created() {
    console.log("2.helloworld实例化完成,挂载阶段还没有开始");
  },

  beforeMount() {
    console.log("3.helloworld挂载之前");
  },
  mounted() {
    console.log("4.helloworld实例被挂载后调用");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
