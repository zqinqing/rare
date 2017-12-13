import axios from 'axios'
import qs from 'qs'

// 数据请求基本地址
export const baseUrl = 'http://localhost:80/pj_yide/'
// export const baseUrl = 'http://192.168.0.239:8080/pj_yide/'

// 拼接 url
function joinUrl(suffix) {
  return baseUrl + suffix
}

// 封装 get 函数
export function getData(suffix, parameter) {
  let param = parameter || {}
  let url = joinUrl(suffix)
  let data = Object.assign({}, param)
  return axios.get(url, {
    params: data
  }).then((result) => {
    return Promise.resolve(result.data)
  }).catch(
    (err) => {
      console.log('网络繁忙，请稍后访问')
    }
  )
}

// 封装 POST 函数
export function postData(suffix, parameter) {
  let parm = parameter || {}
  let url = joinUrl(suffix)
  let data = Object.assign({}, parm)
  return axios.post(url, qs.stringify(data), ).then((result) => {
    return Promise.resolve(result.data)
  }).catch(
    (err) => {
      console.log(err)
      console.log('网络繁忙,请稍后访问')
    }
  )
}

// 封装时间戳转换日期字符串
/**
 * 时间戳转换日期字符串
 * @param  {[type]} timestamp [时间戳]
 * @param  {[type]} type      [类型， 默认返回带具体时间， 1：返回不带时间的字符串]
 * @return {[type]}           [description]
 */
export function format (timestamp, format) {
	var timestamp = timestamp,
			format = format || 'Y-M-D h:m:s';
  if (timestamp == null) {
    return timestamp;
  } else {
    let date = new Date(timestamp),
    		Y = date.getFullYear(),
    		M = date.getMonth() + 1 < 10 ?  '0' + date.getMonth() + 1 : date.getMonth() + 1,
    		D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() ,
    		h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
    		m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
    		s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds(),
				output
		output = format.replace('Y', Y)
						.replace('M', M)
						.replace('D', D)
						.replace('h', h)
						.replace('m', m)
						.replace('s', s);
		return output
  }
}


// 检查邮箱是否重复
export function checkRepeat() {
  let suffix = ''
  return postData(suffix);
}

export function apiUrl() {
  return {
    //  检查邮箱号是否重复
    checkRepeat: 'memberAction!checkEmail.action',
    // 注册
    register: 'memberAction!register.action',
    // 登录
    login: 'memberAction!login.action',
    // 注销
    exit: 'memberAction!logout.action',
    // 发送邮箱验证码
    sendEmailCode: 'memberAction!sendEmailCode.action',
    // 修改密码
    changePwd: 'memberAction!editPassword.action',
    // 获取所有物流
    getLogistics: 'logisticsAction!retrieveLogistics.action',
    // 根据物流ID获取所有地区
    getArea: 'logisticsAction!retrieveLogisticsArea.action',
    // 获取物流价格
    getLogisticsPrice: 'logisticsAction!retrieveLogisticsAreaPrice.action',
    // 首页-如何退税 
    howToRefund: 'withdrawAction!getAllWithdraw.action',
    // 首页-帮助中心
    helpCenter: 'helpAction!getAllHelp.action',
    // 根据 id 获取具体帮助中心内容
    helpContent: 'helpAction!getHelpById.action',
    // 获取上一条帮助中心的数据
     lastHelp: 'helpAction!getLastHelp.action',
    // 获取下一条帮助中心的数据
    nextHelp: 'helpAction!getNextHelp.action',
    // 首页-友情链接
    friendlyLink: 'friendlyLinkAction!getAllFriendlyLink.action',
    // 首页-联系我们
    contactUs: 'contactUsAction!retrieveContactUs.action',
    // 首页-banner
    bannerAction: 'bannerAction!retrieveBanner.action',
    // 购物商城-获取分类
    allGoodsType: 'goodsTypeAction!getAllGoodsType.action',
    // 根据分类 id 获取该商品下的所有品牌
    allBrandByType: 'brandAction!getAllBrandByTypeId.action',
    // 修改基本信息
    revampInfo: 'memberAction!modifyMember.action'
  }
}
