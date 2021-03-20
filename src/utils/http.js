import axios from 'axios'
// import VueCookies from 'vue-cookies'
import { Message } from 'element-ui'
// import Router from '@/router'


const http = axios.create({
    baseURL: '/api',//process.env.VUE_APP_PROXY_PREFIX, //统一添加前缀/api 用于处理跨域问题 
    timeout: 1000 * 5,
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
}); //请求处理 

http.interceptors.request.use((config) => {
    // config.headers['language'] = VueCookies.get('Language')
    // config.headers['token'] = VueCookies.get('Token')
    return config
}, (error) => {
    Message({ message: '请求出错了', type: 'error', duration: 1000 * 5 })
    return Promise.reject(error)
}) //响应处理 
http.interceptors.response.use((response) => { /// isAutoMessage 该属性是手动在AxiosRequestConfig接口中添加 使用时添加进去 用于控制是否显示提示信息 
    if (response.config.method !== 'get' && response.config.isAutoMessage) {
        Message({ type: 'success', message: '操作成功', duration: 1000 * 3 })
    }
    return response.data
}, (error) => { // let code = error.response.status //parseInt(error.message.replace(/[^d]+/g, '')) 
    if (error.code === 'ECONNABORTED' || error.message.includes('timeout')) {
        Message({ message: '请求超时了', type: 'error', duration: 1000 * 5 })
        return Promise.reject(error)
    } else if (error.message === 'Network Error') {
        Message({ message: '网络错误', type: 'error', duration: 1000 * 5 })
        return Promise.reject(error)
    }
    switch (error.response.status) {
        case 401:
            // Router.push({ path: '/login' })
            break;
        case 403:
            Message({ message: '错误403,服务器拒绝请求', type: 'error', duration: 1000 * 5 })
            break;
        case 404:
            Message({ message: '错误404', type: 'error', duration: 1000 * 5 })
            break;
        case 500:
            Message({ message: '服务器错误500', type: 'error', duration: 1000 * 5 })
            break;
        default:
            Message({ message: '出错了' + error.response.status, type: 'error', duration: 1000 * 5 })
    }
    return Promise.reject(error)
})

export default http