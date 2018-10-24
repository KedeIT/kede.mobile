import qs from 'qs'
import axios from 'axios'

/**
 * axios请求拦截器
 * @param {object} config axios请求配置对象
 * @return {object} 请求成功或失败时返回的配置对象或者promise error对象
 **/
axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

/**
 * axios 响应拦截器
 * @param {object} response 从服务端响应的数据对象或者error对象
 * @return {object} 响应成功或失败时返回的响应对象或者promise error对象
 **/
axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error)
})

/**
 * 请求发出后检查返回的状态码,统一捕获正确和错误的状态码，正确就直接返回response,错误就自定义一个返回对象
 * @param {object} response 响应对象
 * @return {object} 响应正常就返回响应数据否则返回错误信息
 **/
function checkStatus (response) {
  // 如果状态码正常就直接返回数据,这里的状态码是htttp响应状态码有400，500等，不是后端自定义的状态码
  if (response && ((response.status === 200 || response.status === 304 || response.status === 400))) {
    return response.data // 直接返回http response响应的data,此data会后端返回的数据数据对象，包含后端自定义的code,message,data属性
  }
  return { // 自定义网络异常对象
    code: '404',
    message: '网络异常'
  }
}

/**
 * 检查完状态码后需要检查后如果成功了就需要检查后端的状态码处理网络正常时后台语言返回的响应
 * @param {object} res 是后台返回的对象或者自定义的网络异常对象，不是http 响应对象
 * @return {object} 返回后台传过来的数据对象，包含code,message,data等属性，
 **/
// function checkCode (res) {
//   // 如果状态码正常就直接返回数据
//   if (res.code === -404) { // 这里包括网络异常，服务器异常等这种异常跟业务无关，直接弹窗警告
//     alert(res.message)
//     return {code: '', message: '网络错误'}
//   } else { // 除了上面的异常就剩下后端自己返回的状态code了这个直接返回出去供调用时根据不同的code做不同的处理
//     return res
//   }
// }

export default {
  post (url, data) {
    return axios({
      method: 'post',
      baseURL: process.env.BASE_URL,
      url: url,
      data: qs.stringify(data),
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      timeout: 10000
    }).then((res) => {
      return checkStatus(res)
    })
  },
  get (url, params) {
    return axios({
      method: 'get',
      baseURL: process.env.BASE_URL,
      url,
      params,
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    )
  }

}