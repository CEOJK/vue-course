<template>
  <header class="header">
    <el-row>
      <!-- 头部左部 -->
      <el-col :span="4"
        ><div class="grid-content bg-purple loge">课程管理系统</div></el-col
      >
      <!-- 头部中部 -->
      <el-col :span="18">
        <div class="grid-content bg-purple left">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <!-- curent -->
            <el-breadcrumb-item :to="current.path" v-if="current">{{
              current.name
            }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-col>
      <!-- 头部右侧 -->
      <el-col :span="2"
        ><div class="grid-content bg-purple right">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <img :src="Myimg" alt="" class="img" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus"
                >狮子头</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </header>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      Myimg: require("../assets/img/sixstar_logo.png"),
    };
  },
  computed: {
    ...mapState({
      current: (state) => state.tab.currentMenu,
    }),
  },
};
</script>
<style lang="scss" scoped>
$color: #e38eff;
.header {
  .loge {
    text-align: center;
    background-color: green;
    height: 60px;
    line-height: 60px;
  }
  .left {
    background-color: $color;
    height: 60px;
    line-height: 60px;
    display: flex;
    align-items: center;
    .el-breadcrumb {
      margin-left: 10px;
    }
  }
  .right {
    background-color: $color;
    height: 60px;
    text-align: center;
    .img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      margin-top: 7.5px;
    }
  }
}
</style>