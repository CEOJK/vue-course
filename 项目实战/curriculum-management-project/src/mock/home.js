import Mock from 'mockjs'
// 图表数据
let List = []
export default {
    getHomeData: () => {
        for (let i = 0; i < 7; i++) {
            List.push(
                Mock.mock({
                    Vue: Mock.Random.float(100, 8000, 0, 2),
                    WeChat: Mock.Random.float(100, 8000, 0, 2),
                    ES6: Mock.Random.float(100, 8000, 0, 2),
                    H5: Mock.Random.float(100, 8000, 0, 2),
                    React: Mock.Random.float(100, 8000, 0, 2),
                    SpringBoot: Mock.Random.float(100, 8000, 0, 2)
                })
            )
        }
        return {
            code: 20000,
            body: {
                // 饼图
                mallData: [
                    {
                        name: 'Vue',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    }, {
                        name: '小程序',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    }, {
                        name: 'ES6',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    }, {
                        name: 'H5',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    }, {
                        name: 'React',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    }, {
                        name: 'SpringBoot',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    }

                ],
                // 柱状图
                userData: [
                    {
                        date: '周一',
                        new: Mock.Random.integer(1, 100),
                        active: Mock.Random.integer(100, 1000)
                    },
                    {
                        date: '周二',
                        new: Mock.Random.integer(1, 100),
                        active: Mock.Random.integer(100, 1000)
                    },
                    {
                        date: '周三',
                        new: Mock.Random.integer(1, 100),
                        active: Mock.Random.integer(100, 1000)
                    },
                    {
                        date: '周四',
                        new: Mock.Random.integer(1, 100),
                        active: Mock.Random.integer(100, 1000)
                    },
                    {
                        date: '周五',
                        new: Mock.Random.integer(1, 100),
                        active: Mock.Random.integer(100, 1000)
                    },
                    {
                        date: '周六',
                        new: Mock.Random.integer(1, 100),
                        active: Mock.Random.integer(100, 1000)
                    },
                    {
                        date: '周日',
                        new: Mock.Random.integer(1, 100),
                        active: Mock.Random.integer(100, 1000)
                    }
                ],
                // 折线图
                orderData: {
                    date: [
                        '2020-6-1',
                        '2020-7-1',
                        '2020-8-1',
                        '2020-9-1',
                        '2020-10-1',
                        '2020-11-1',
                        '2020-12-1',
                    ],
                    data: List
                },
                tableData: [
                    {
                        name: 'Vue',
                        todayBuy: Mock.Random.float(100, 1000, 0, 2),
                        monthBuy: Mock.Random.float(3000, 5000, 0, 2),
                        totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
                    },
                    {
                        name: '小程序',
                        todayBuy: Mock.Random.float(100, 1000, 0, 2),
                        monthBuy: Mock.Random.float(3000, 5000, 0, 2),
                        totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
                    },
                    {
                        name: 'ES6',
                        todayBuy: Mock.Random.float(100, 1000, 0, 2),
                        monthBuy: Mock.Random.float(3000, 5000, 0, 2),
                        totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
                    },
                    {
                        name: 'H5',
                        todayBuy: Mock.Random.float(100, 1000, 0, 2),
                        monthBuy: Mock.Random.float(3000, 5000, 0, 2),
                        totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
                    },
                    {
                        name: 'React',
                        todayBuy: Mock.Random.float(100, 1000, 0, 2),
                        monthBuy: Mock.Random.float(3000, 5000, 0, 2),
                        totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
                    },
                    {
                        name: 'SpringBoot',
                        todayBuy: Mock.Random.float(100, 1000, 0, 2),
                        monthBuy: Mock.Random.float(3000, 5000, 0, 2),
                        totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
                    }
                ]
            }
        }
    }
}