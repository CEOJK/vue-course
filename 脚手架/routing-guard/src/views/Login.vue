<template>
  <div>
    <h2>登陆页面</h2>
    账号：<input type="text" v-model="uname" /><br />
    密码：<input type="text" v-model="upass" /><br /><br />
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uname: "",
      upass: "",
    };
  },
  methods: {
    login() {
      /* 给window.username和 window.userpass赋值*/
      var n = (window.username = "xiao");
      var p = (window.userpass = "123");
      // console.log(this.uname === n)

      if (this.uname === n && this.upass === p) {
        //成功登陆
        alert("登陆成功");
        this.$router.replace("/");
      } else {
        alert("账号或密码不对");
      }
    },
  },
};
</script>

<style>
</style>
