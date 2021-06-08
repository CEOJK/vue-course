<template>
  <div class="manage">
    <!-- 用户页的头部表单  -->
    <div class="manage-header">
      <el-button type="primary">添加</el-button>
      <common-form inline :form="searchFrom" :formLabel="formLabel">
        <el-button type="primary">搜索</el-button>
      </common-form>
    </div>
    <!-- 用户页的底部表格  -->
    <!-- 给CommonTable 子组件传值   -->
    <common-table
      :tableData="tableData"
      :tableLabel="tableLabel"
      :config="config"
    ></common-table>
  </div>
</template>
<script>
import CommonForm from "../../components/CommonForm";
import CommonTable from "../../components/CommonTable";
export default {
  components: {
    CommonForm,
    CommonTable,
  },
  data() {
    return {
      tableData: [], //表格数据
      //列参数
      tableLabel: [
        {
          prop: "name",
          label: "姓名",
        },
        {
          prop: "age",
          label: "年龄",
        },
        {
          prop: "sexLabel",
          label: "性别",
        },
        {
          prop: "birth",
          label: "出生日期",
        },
        {
          prop: "addr",
          label: "地址",
        },
      ],
      // 分页
      config: {
        page: 1,
        total: 20,
      },
      // 表单
      searchFrom: {
        // 管理员输入的值
        keyword: "",
      },
      // 描述表单项
      formLabel: [
        {
          model: "keyword", //绑定输入的值
          label: "", // 描述表单项的值
          type: "input", // 输入框
        },
      ],
    };
  },
  mounted: {},
};
</script>
<style lang="scss" scoped>
.manage {
  height: 95%;
  padding: 20px;
  overflow: hidden;
  background-color: blue;
  &-header {
    display: flex;
    justify-content: space-between; /* 居中对齐 */
    align-items: flex-start; /* 侧轴起点对齐 */
  }
}
</style>