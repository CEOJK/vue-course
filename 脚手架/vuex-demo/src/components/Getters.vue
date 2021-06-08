<template>
  <div class="about">
    <h1>getters</h1>
    <h3>{{ $store.state.count }}</h3>
    <h3>{{ $store.state.msg[1].name }}</h3>
    <h3>{{ $store.state.stu }}</h3>
    <button @click="updataName">修改名称</button>
    <h3>{{ $store.getters.getage18 }}</h3>
    <h3>{{ $store.getters.getUserAge(19) }}</h3>
    <h3>获取大于19岁的人数:{{ $store.getters.getuser2 }}</h3>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {};
  },
  methods: {
    updataName() {
      //修改名称
      this.$store.commit("updateStu");
    },
  },
  computed: {
    uesrtofo() {
      return this.$store.getters.getUserAge;
    },
  },
};
</script>
<style lang="less">
@w: 400px;
@h: 400px;
.about {
  width: @w;
  height: @h;
  border: 1px solid blue;
  margin: 0 auto;
}
</style>
