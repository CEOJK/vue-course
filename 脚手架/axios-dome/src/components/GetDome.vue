<template>
  <div class="dome">
    <h1>使用axios请求数据</h1>
    <ul>
      <li v-for="item in array">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  name: "Dome",
  data() {
    return {
      array: [],
    };
  },
  methods: {
    getPosts() {
      var url = "http://jsonplaceholder.typicode.com/posts";

      Axios.get(url, {
        params: {
          _limit: 6,
        },
      })
        .then((response) => {
          console.log(response);
          this.array = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  //vue实例创建完成，data/methods创建完成，会触发的一个钩子函数
  created() {
    this.getPosts();
  },
};
</script>
<style lang="less">
.dome {
  width: 600px;
  height: auto;
  margin: 0 auto;
}
</style>
