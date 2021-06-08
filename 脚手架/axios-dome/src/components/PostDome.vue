<template>
  <div>
    <h1>post请求数据</h1>
    <ul>
      <li v-for="item in plist">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "PostDome",
  data() {
    return {
      plist: [],
    };
  },
  methods: {
    PostDome() {
      var url = "http://jsonplaceholder.typicode.com/posts";
      this.$axios
        .post(url, {
          firstName: "Fred",
          lastName: "Flintstone",
        })
        .then((a) => {
          console.log(a);
          this.plist = a.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.PostDome();
  },
};
</script>
<style lang="less">
</style>