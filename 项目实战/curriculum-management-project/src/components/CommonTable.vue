<template>
  <div class="common-table">
    <el-table height="90%" :data="tableData" style="width: 100%">
      <!-- 第一列默认是序号-->
      <el-table-column label="序号" width="85">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <!-- 其他列用v-for循环便利出父组件传来的数据 -->
      <el-table-column v-for="item in tableLabel" :label="item.label">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <!-- 操作列 -->
      <!-- <el-table-column
        v-for="item in tableLabel"
        :label="item.label"
        width="85"
      >
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column> -->
    </el-table>
  </div>
</template>
<script>
export default {
  props: {
    //接收UserManage 父组件传递过来的数据
    // 数据列表
    tableData: Array,
    // 列数据
    tableLabel: Array,
    // 分页
    config: Object,
  },
};
</script>
<style lang="scss" scoped>
</style>