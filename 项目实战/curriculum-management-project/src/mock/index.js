import Mock from 'mockjs'
// 导入home.js的数据
import homeApi from './home.js'
// 导入User-lifo.js的数据
import userApi from './User-Info'
//拦截的是/api/home/getData
Mock.mock('/api/home/getData', 'get', homeApi.getHomeData)
// 配置拦截用户相关的URL
//拦截的是 /api/user/getUserData
Mock.mock(/\/user\/getUserData/, 'get', userApi.getUserList)