<template>
  <div class="s">
    <h3>{{ mag }}</h3>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mag: "水果详细资料",
    };
  },
};
</script>
<style lang="less">
.s {
  width: 300px;
  height: 500px;
  background-color: palegreen;
  margin: 0 auto;
}
</style>