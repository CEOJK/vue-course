<template>
  <el-row :gutter="20" class="home">
    <el-col :span="8">
      <el-card shadow="hover" style="height: 290px">
        <!-- 用户信息 -->
        <div class="user">
          <img :src="userimg" alt="" />
          <div class="userinfo">
            <p class="name">admin</p>
            <p class="role">超级管理员</p>
          </div>
        </div>
        <!-- 登入信息 -->
        <div class="login-info">
          <p>登录时间：<span>2020-11-3 21:23:00</span></p>
          <p>登录地点：<span>湖南长沙</span></p>
        </div>
      </el-card>
      <el-card shadow="hover" style="height: 500px; margin-top: 20px">
        <el-table :data="tableData" stripe style="width: 100%">
          <!-- 便利对象 val键值  key键名   index角标 -->
          <!-- prop 数据  label  -->
          <el-table-column
            v-for="(val, key) in tabLabel"
            :prop="key"
            :label="val"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card
          shadow="hover"
          v-for="i in countData"
          :body-style="{ display: 'flex', padding: 0 }"
          ><i
            class="icon"
            :class="`el-icon-${i.icon}`"
            :style="{ backgroundColor: i.color }"
          ></i>
          <div class="desc">
            <p class="money">{{ i.value }}</p>
            <p class="text">{{ i.name }}</p>
          </div>
        </el-card>
      </div>
      <!-- 折线图 -->
      <el-card shadow="hover">
        <MyEcharts
          :chartData="echartsData.order"
          style="height: 260px"
        ></MyEcharts>
      </el-card>
      <!-- 饼图和柱状图 -->
      <div class="graph">
        <el-card shadow="hover">
          <MyEcharts
            :chartData="echartsData.user"
            style="height: 260px"
          ></MyEcharts>
        </el-card>
        <el-card shadow="hover">
          <MyEcharts
            :isAxisChart="false"
            :chartData="echartsData.mall"
            style="height: 260px"
            >柱状图</MyEcharts
          >
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>
<script>
/* 第一种引入外部scss样式 */
// import '../../assets/scss/home.scss'
import MyEcharts from "../../components/CourseEcharts";
export default {
  components: {
    MyEcharts,
  },
  data() {
    return {
      userimg: require("../../assets/img/sixstar_logo.png"),
      countData: [
        /* 订单的模拟数据*/
        {
          name: "今日支付订单",
          value: 100,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 150,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 80,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 210,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 500,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 300,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
      // 定义数组接收mock的数据
      tableData: [],
      tabLabel: {
        name: "课程",
        monthBuy: "本月购买",
        todayBuy: "今日购买",
        totalBuy: "总购买",
      },
      echartsData: {
        //保存echarts数据
        //对应饼图的数据
        mall: {
          series: [],
        },
        // 对应折线图的数据
        order: {
          xData: [],
          series: [],
        },
        // 对应柱状图的数据
        user: {
          xData: [],
          series: [],
        },
      },
    };
  },
  methods: {
    getTableData() {
      this.$http.get("/api/home/getData").then((res) => {
        this.tableData = res.data.body.tableData;
        // console.log(res.data.body);
        res = res.data.body;
        //订单折线图

        let order = res.orderData;
        console.log(order);
        //  x轴的数据;
        // console.log(order.date);

        this.echartsData.order.xData = order.date;
        //取出series中的name部分 ===》键名
        let keyArray = Object.keys(order.data[0]); //获取说有对象中key名，Es6中的语法
        // console.log(keyArray);

        keyArray.forEach((key) => {
          // 折线图
          this.echartsData.order.series.push({
            name: key,
            data: order.data.map((item) => item[key]),
            type: "line",
          });
        });
        // 用户 柱状图
        this.echartsData.user.xData = res.userData.map((item) => item.date);
        console.log(this.echartsData.user.xData);
        this.echartsData.user.series.push({
          name: "新增用户",
          data: res.userData.map((item) => item.new),
          type: "bar",
        });
        /* 活跃 */
        this.echartsData.user.series.push({
          name: "活跃用户",
          data: res.userData.map((item) => item.active),
          type: "bar",
        });
        //饼图
        this.echartsData.mall.series.push({
          data: res.mallData,
          type: "pie",
        });
      });
    },
    getList() {
      this.$http
        .get("/api/home/getData")
        .then((res) => {
          console.log(res);
        })
        .catch((eer) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getTableData();
  },
};
</script>

<style lang="scss" >
/* 第二种引入方式  ~ 相对位置*/
@import "~@/assets/scss/home.scss";
</style>