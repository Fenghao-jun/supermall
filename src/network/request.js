import axios from 'axios'
//创建axios实例
const service = axios.create({
    baseURL:'http://152.136.185.210:8000/api/w6',
    timeout:10000
})

service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default {
    /**
     * 方法ID:requestGet
     * 方法功能:Get请求方法封装
     * 参数说明:(string) url 请求的地址  (object)data 请求的参数
     * 返回值说明:
     * 内部处理说明：
     * 做成日期： 2020/11/21       做成者：xiaofeng
     */
    requestGet(param={url:'',data:{},bodydata:{}}){
        return service({
            url:param.url,
            method:'get',
            data:param.bodydata,

        })
    },

    /**
     * 方法ID: requestPost
     * 方法功能: 发送Post请求
     * 参数说明:    (string) url 请求的地址  (object)data 请求的参数  (string)method 请求的方法类型
     * 返回值说明:
     * 内部处理说明：
     * 做成日期： 2020/11/22       做成者：xiaofeng
     */
    requestPost(param = {url:'', data:{}, bodydata:{} , method:'post'}){
        return service({
            url: param.url,
            data:param.bodydata,
            method:param.method,
            headers:{

            }
        })

    }

}
