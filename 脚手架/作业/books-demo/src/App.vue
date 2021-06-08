<template>
  <div id="app">
    <div id="nav">
      <div id="head">33333333</div>
      <div id="foot">
        <div id="sidebar">22222</div>
        <div id="mian">3434</div>
      </div>
      <!-- <router-link to="/">Home</router-link> |说 -->
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#head {
  width: 100%;
  height: 20%;
  background-color: #42b983;
}
#foot {
  width: 100%;
  height: 80%;
  background-color: black;
  #sidebar {
    width: 20%;
    background-color: red;
    margin-right: 10px;
    display: inline-block;
    margin: 0;
    padding: 0;
  }
  #mian {
    width: 80%;
    background-color: aqua;
    display: inline-block;
    margin: 0;
    padding: 0;
  }
}
</style>
