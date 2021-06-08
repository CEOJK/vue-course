<template>
  <el-form ref="form" :model="form" label-width="100px" :inline="inline">
    <!-- 标签显示名称 -->
    <el-form-item
      v-for="item in formLabel"
      :label="item.label"
      :key="item.model"
    >
      <!-- 根据type来显示什么样的标签 -->
      <el-input
        v-model="form[item.model]"
        :placeholder="'请输入' + item.label"
        v-if="item.type === 'input'"
      ></el-input>
      <!-- 下拉框 -->
      <el-select
        v-model="form[item.model]"
        placeholder="请选择"
        v-if="item.type === 'select'"
      >
        <!-- 如果是select或CheckBox、radio 还需要选择信息-->
        <el-option
          v-for="op in item.opts"
          :label="op.label"
          :value="op.value"
          :key="op.walue"
        ></el-option>
      </el-select>
      <!-- 开关 -->
      <el-switch
        v-model="form[item.model]"
        v-if="item.type === 'switch'"
      ></el-switch>
      <!-- 日期选择器-->
      <el-date-picker
        type="date"
        placeholder="选择日期"
        v-model="form[item.model]"
        v-if="item.type === 'date'"
        style="width: 200px"
      ></el-date-picker>
    </el-form-item>
    <!-- 留个位置用来放搜索按钮 -->
    <el-form-item>
      <slot></slot>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  props: {
    //接收父组件传递过来的值
    /*
				form:表单数据
				formLabel：数据标签
				inline:是否是行内表单域
			*/
    form: Object,
    formLabel: Array,
    inline: Boolean,
  },
};
</script>