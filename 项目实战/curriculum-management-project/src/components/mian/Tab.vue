<template>
  <el-container>
    <el-aside width="auto">
        <!-- 侧边栏的折叠选项 -->
      <el-menu
        :collapse="isCollapse"
        class="el-menu-vertical-demo"
        background-color="#CCBBFF"
        text-color="#000"
      >
        <el-menu-item index="4"  @click="collapseMenu">
          <i class="el-icon-menu"></i>
          <span>折叠</span>
    </el-button>
        </el-menu-item>
      </el-menu>
      <!-- 右侧的tag栏 -->
    </el-aside>
     <el-main > 
        <div class="tags">
          <!--   effect tag的主题颜色 
                 type="danger" 红色
                 closavle 是否可关闭
           -->
        <el-tag
        :effect="$route.path === tag.path ? 'dark' : 'plain'"
        type="danger"
        :key="tag.path"
        v-for="(tag,index) in  tags"
        :closable ="tag.path !== '/home'"
        :disable-transitions="false"
         @click="clickTags(tag)"
         @close=" handleClose(tag,index)"
         >
        {{tag.name}}
        
        </el-tag>
        </div>
      </el-main> 
  </el-container>
</template>
<script>
// 通过mapState获取vuex里的state的数据
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    // 获取isCollapse的值
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
    // 获取talist中的数据
    ...mapState({
      // 获取 tablist里的数据
      tags: (state) => state.tab.tablist,
    }),
  },
  methods: {
    // 使用vuex中的删除方法
    ...mapMutations({
      del: "delMenu",
    }),
    //提交到 mutations 属性中
    collapseMenu() {
      this.$store.commit("collapseMenu");
    },
    // 删除tag 标签
    handleClose(tag, index) {
      let taglength = this.tags.length - 1;
      // 调用del方法
      this.del(tag);
      // console.log(index)
      //如果关闭的不是当前的路由，不进行跳转
      if (tag.path !== this.$route.path) {
        return;
      }
      //如果关闭的是最右边的路由的话，往最左边调
      if (index === taglength) {
        this.$router.push({ path: this.tags[index - 1].path });
      } else {
        //否则往右边跳转
        this.$router.push({ path: this.tags[index].path });
      }
    },
    //  点击tag标签 页面跳转
    clickTags(item) {
      console.log(item);
      this.$router.push({ path: item.path });
    },
  },
};
</script>
<style lang="scss" scoped>
//
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 56px;
}
// 消除边框线
.el-menu {
  border: none;
}
// 右侧栏的样式
.el-main {
  margin: 0;
  padding: 0;
}
.tags {
  cursor: pointer;
  margin-top: 12px;
}
.el-tag {
  margin-left: 20px;
}
// // tag样式
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
</style>