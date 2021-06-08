<template>
  <div class="actions">
    <h1>Mutation</h1>
    <h3>{{ $store.state.count }}</h3>
    <button @click="add">+</button>
    <button @click="add5(5)">+5</button>
    <button @click="add10(10)">+10</button>
    <button @click="$store.state.count--">-</button>
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
      this.$store.commit("add");
    },
    add5(num) {
      this.$store.commit("increment1", { aa: num });
    },
    add10(num) {
      this.$store.commit("increment1", { aa: num });
    },
  },
};
</script>
<style lang="less">
@w: 400px;
@h: 200px;
.actions {
  width: @w;
  height: @h;
  border: 1px solid blue;
  margin: 0 auto;
}
</style>
