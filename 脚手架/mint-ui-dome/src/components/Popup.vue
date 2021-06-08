<template>
  <div>
    <p>我是第一个{{ msg }}</p>

    <mt-button @click.native="handleClick">按钮</mt-button>
    <!--  -->
    <mt-popup v-model="popupVisible" popup-transition="popup-fade">
      <ul>
        <li v-for="(item, index) in array">{{ item.title }}</li>
      </ul>
    </mt-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "组件",

      popupVisible: false,

      array: [{ title: "下面弹出popup" }],
    };
  },

  methods: {
    handleClick: function () {
      this.popupVisible = true;
    },
  },
};
</script>
<style lang="less">
</style>