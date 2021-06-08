<template>
  <div class="actions">
    <h1>Actions</h1>
    <h3>{{ $store.state.count }}</h3>
  </div>
</template>
<script>
export default {
  name: "actions",
  data() {
    return {};
  },
  methods: {
    add() {
      this.$store.dispatch("asIncrement", { num: 3 });
    },
  },
  //钩子函数   在挂载之前调用
  created() {
    this.add();
  },
};
</script>
<style lang="less">
@w: 400px;
@h: 200px;
.text {
  width: @w;
  height: @h;
  border: 1px solid blue;
  margin: 0 auto;
}
</style>
