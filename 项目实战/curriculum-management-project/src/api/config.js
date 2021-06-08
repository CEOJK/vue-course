import axios from 'axios'
//创建一个axios实例
const service = axios.create({
    //设置请求超时的时间
    timeout: 3000
});

// 添加请求拦截器
// 发送请求之前，给它的请求头添加一个token值传给后端，这样就不用每一个加token值
service.interceptors.request.use((config) => {
    // 在发送请求之前做些什么
    return config;
},
    (error) => {
        // 对请求错误做些什么
        console.log(error);
    });

// 添加响应拦截器
service.interceptors.response.use((response) => {//根据状态码做判断
    // 对响应数据做点什么
    let res = {}
    res.status = response.status
    res.data = response.data
    return res;
},
    (error) => {
        // 对响应错误做点什么
        console.log(error);
    });

export default service //暴露service，让它在其他页面可以使用