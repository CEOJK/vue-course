<template>
  <div class="hello">
    <input
      type="text"
      class="form-control"
      placeholder="搜索"
      @input="fn"
      v-model="word"
    />
    <ul class="list">
      <li v-for="item in array" :key="item">
        <a
          :href="
            'https://www.baidu.com/sugrec?prod=pc&from=pc_web&wd=' +
            item +
            '&req=2&bs=' +
            item +
            '&cb=gg'
          "
          >{{ item }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      array: [],
      word: "",
    };
  },
  methods: {
    fn() {
      fetch("http://localhost:8000/hello?word=" + this.word)
        .then((res) => res.json())
        .then((msg) => (this.array = msg));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  width: 600px;
  height: auto;
  margin: 0 auto;
}
.list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.list li {
  border-bottom: 1px solid red;
  margin-top: 10px;
}
</style>
