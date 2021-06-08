<template>
  <div class="module">
    <h1>Module</h1>
    <h3>{{ $store.state.container }}</h3>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
@w: 400px;
@h: 400px;
.module {
  width: @w;
  height: @h;
  border: 1px solid blue;
  margin: 0 auto;
}
</style>