// 导入axions
import axios from 'axios'
import qs from 'qs'
// 公共url
// 测试服务器
// export const baseUrl = '//supercat.messcat.com'
// 正式服务器
export const baseUrl = '//open.d-air.messcat.com'
// 公共参数
const commonParams = {
  // 中文
  appid: 185615184815279
  // 英文
  // appid: 529750023705764
}

// 拼接url
function joinUrl (suffix) {
  return baseUrl + suffix
}

// 判断是否请求成功
export const ERR_OK = '200'

// 封装get请求函数
export function getData (suffix, parameter) {
  const parm = parameter || {}
  const url = joinUrl(suffix)
  const data = Object.assign({}, commonParams, parm)
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch(
    (err) => {
      console.log('网络繁忙,请稍后访问')
    }
  )
}

// 封装post请求
export function postData(suffix, parameter) {
  const parm = parameter || {}
  const url = joinUrl(suffix)
  const data = Object.assign({}, commonParams, parm)
  return axios.post(url, qs.stringify(data)).then((res) => {
    return Promise.resolve(res.data)
  }).catch(
    (err) => {
      console.log('网络繁忙,请稍后访问')
    }
  )
}
//提交表单
export function postForm (parameter) {
    const suffix = `/front/feedback/postData`
    return postData(suffix,parameter)
}

// 获取总栏目
export function getNavigation() {
  const suffix = `/front/column/getNavigation`
  return getData(suffix)
}

// 获取子栏目
export function columnContent(columnName) {
  const suffix = `/front/column/getDetail/${columnName}`
  return getData(suffix)
}

// 获取模块图片
export function getModulesDataByKey(key) {
  const suffix = `/front/module/getModulesDataByKey/${key}`
  return getData(suffix)
}

// 获取新闻内容
export function getColumnNews(columnName) {
  const suffix = `/front/news/getColumnNews/${columnName}`
  return getData(suffix)
}

// 获取搜索结果
export function getSearchResult(params) {
  const suffix = `/front/news/search/${params.searchVal}`
  const data = {
    pageNo: params.page,
    pageSize: params.pageSize
  }
  return getData(suffix, data)
}

// 获取父元素的name值
export function getParentList(columnName) {
  const suffix = `/front/column/getParentList/${columnName}`
  return getData(suffix)
}

// 获取搜索详情
export function getSearchDetail(newsId) {
  const suffix = `/front/news/getDetail/${newsId}`
  return getData(suffix)
}
// 获取友商联盟详情
export function getAllianceDetail(newsId) {
    const suffix = `/front/module/queryByID/${newsId}`
    return getData(suffix)
}

// 排序函数
export function order(res, B) {
  let index
  res.forEach((v, i) => {
    if (v.name === B) {
      index = i
    }
  })
  if (index !== '') {
    return index
  }
}

// 数组排序
export function _sort(res) {
  let newRes = res.reverse();

  function sortNumber(a, b) {
    return b.isTop - a.isTop
  }

  newRes.sort(sortNumber)
  return newRes;
}

// rem转换
export function rem() {
  
}