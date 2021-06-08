<template>
  <div class="hello">
    <h1>水果</h1>
    <ul>
      <li v-for="(item, index) in array">
        <router-link :to="'/subroute/' + index"> {{ item }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      array: ["苹果", "香蕉", "百香果", "石榴"],
    };
  },
};
</script>
<style lang="less">
.hello {
  width: 300px;
  height: 500px;
  background-color: brown;
  margin: 0 auto;
}
li a {
  color: #000;
  text-decoration: none;
}
</style>