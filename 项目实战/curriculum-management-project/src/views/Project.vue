<template>
  <el-container>
    <!-- 头部 -->
    <el-header class="header"> <Header></Header> </el-header>
    <course-tab width="auto"> </course-tab>
    <el-container>
      <!-- 导航栏 -->
      <el-aside width="auto" class="aside">
        <Aside></Aside>
      </el-aside>
      <el-main class="main">
        <!-- 内容区域 -->
        <Main>
          <!-- 点击导航栏显示的内容 -->
          <router-view></router-view>
        </Main>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Aside from "../components/Aside";
import Mian from "../components/Mian";
import Header from "../components/Headers";
import CourseTab from "../components/mian/Tab";
export default {
  name: "project",
  components: {
    Aside,
    Mian,
    Header,
    CourseTab,
  },
};
</script>
<style lang="scss">
.header {
  margin: 0;
  padding: 0;
  background-color: #545c64;
}
.main {
  // background-color: burlywood;
}
</style>