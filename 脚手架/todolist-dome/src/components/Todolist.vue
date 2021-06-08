<template>
  <div class="box">
    <input
      type="text"
      v-model="mag"
      placeholder="请输入任务名称,按回车键添加"
      @keyup.enter="add"
    />
    <h3>未完成</h3>
    <ul id="todoing">
      <li v-for="(item, index) in list" v-if="!item.isChecked">
        <input
          type="checkbox"
          v-model="item.isChecked"
          @click="save(index)"
        />{{ item.title }}<button @click="del(index)">删除</button>
      </li>
    </ul>
    <h3>已完成</h3>
    <ul id="todone">
      <li v-for="(item, index) in list" v-if="item.isChecked">
        <input
          type="checkbox"
          v-model="item.isChecked"
          @click="save(index)"
        />{{ item.title }}
        <button @click="del(index)">删除</button>
      </li>
    </ul>
    <hr />
    <button @click="delLocalStorage">清除本地缓存</button>
  </div>
</template>
<script>
export default {
  mane: "Todolist",
  data() {
    return {
      mag: "",
      list: [
        // { title: "", isChecked: false },
        // { title: "", isChecked: true },
      ],
    };
  },
  methods: {
    add() {
      if (this.mag == "") {
        alert("请输入");
      } else {
        this.list.push({ title: this.mag, isChecked: false });
        this.mag = "";
        /* 
					localStorage.setItem 存储的是一个对象
					JSON.stringify(this.list)将json格式的数据(javascript对象)，
					转换成json格式的字符串
			  */
        localStorage.setItem("tolist", JSON.stringify(this.list));
      }
    },
    del(index) {
      this.list.splice(index, 1);
      /* 
					localStorage.setItem 存储的是一个对象
					JSON.stringify(this.list)将json格式的数据(javascript对象)，
					转换成json格式的字符串
			  */
      localStorage.setItem("tolist", JSON.stringify(this.list));
    },
    save(index) {
      //保存复选框的状态
      //   console.log(this.list[index].isChecked);
      this.list[index].isChecked = !this.list[index].isChecked;
      // JSON.stringify()转换成json格式的字符串
      localStorage.setItem("tolist", JSON.stringify(this.list));
    },
    delLocalStorage() {
      //清除本地缓存

      localStorage.removeItem("tolist");
      if (!localStorage.getItem("tolist")) {
        alert("已经清除本地缓存，请刷新页面");
      }
    },
  },
  mounted() {
    //挂载完成，会执行的函数
    //Json字符串=》Json对象
    /* 
			   在取到localStorage中的tolist时，需要先判断是否存在，存在才能进行赋值,否则
			   当tolist不存在是赋值会出错误.
			 */
    var tolist = JSON.parse(localStorage.getItem("tolist"));
    if (tolist) {
      this.list = tolist;
    }
    // console.log(tolist)
  },
};
</script>
<style lang="less">
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.box h3 {
  background-color: aqua;
}
.box ul li {
  margin: 10px 0;
  border-radius: 8px;
}
#todoing li {
  background: rgb(194, 240, 240);
}
#todone li {
  background: rgb(205, 240, 194);
}
</style>