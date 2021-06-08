  <template>
  <el-menu
    :collapse="isCollapse"
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    background-color="#CCBBFF"
    text-color="#000"
    active-text-color="#33ffff"
    router
  >
    <!-- 便利没有子路由的选项 -->
    <el-menu-item
      :index="item.path"
      v-for="(item, index) in onchildren"
      @click="clickMenu(item)"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.name }}</span>
    </el-menu-item>
    <!-- 有子路由的选项 -->
    <el-submenu index="i" v-for="items in haschildren">
      <template slot="title">
        <i :class="'el-icon-' + items.icon"></i>
        <span>{{ items.name }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          :index="sub.path"
          v-for="sub in items.children"
          @click="clickMenu(sub)"
        >
          <i :class="'el-icon-' + sub.icon"></i>
          <span>{{ sub.name }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "asides",
  data() {
    return {
      list: [
        {
          path: "/home",
          name: "首页",
          icon: "s-home",
        },
        { path: "/user", name: "用户管理", icon: "user-solid" },
        { path: "/course", name: "课程管理", icon: "s-management" },
        {
          name: "其他",
          icon: "setting",
          children: [
            {
              path: "/page1",
              name: "页面1",
              icon: "s-management",
            },
            {
              path: "/page2",
              name: "页面2",
              icon: "s-management",
            },
          ],
        },
      ],
    };
  },
  computed: {
    // 判断是否有子路由
    onchildren() {
      return this.list.filter((item) => !item.children);
    },
    haschildren() {
      return this.list.filter((item) => item.children);
    },
    //判断是否折叠，获取Boolean值
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
  },
  methods: {
    clickMenu(item) {
      // console.log(item);
      //调用vuex中的selectMenu方法存储数据
      //提交item里的数据
      this.$store.commit("selectMenu", item);
    },
  },
};
</script>

<style lang="scss">
.aside {
  // height: 100vh;
  background-color: #ccbbff;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  border: none;
}
</style>