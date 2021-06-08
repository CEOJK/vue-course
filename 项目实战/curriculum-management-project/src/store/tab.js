export default {
    state: { //存放共享数据
        //当前菜单
        currentMenu: null,
        isCollapse: false,
        tablist: [
            {
                path: "/home",
                name: "首页",
                icon: "s-home",
            }
        ]
    },
    mutations: {//存放方法
        // state为空
        // val = item      item Aside.vue传来的数据
        selectMenu(state, val) {
            if (val.name === 'home') {
                state.currentMenu = null
            } else {
                state.currentMenu = val
                //findIndex() 方法返回传入一个测试条件（函数）符合条件的数组第一个元素位置。
                //如果等于 -1 那么就说明数组中不存在这个对象，那么就直接插入，否则就什么都不做
                let a = state.tablist.findIndex(item => item.name === val.name)
                a === -1 ? state.tablist.push(val) : ''
            }
        },

        delMenu(state, val) {
            let a = state.tablist.findIndex(item => item.name === val.name)
            state.tablist.splice(a, 1)
        },
        collapseMenu(state) {//操控是否折叠菜单
            state.isCollapse = !state.isCollapse
        }
    },
    actions: {//异步改变
    },
}