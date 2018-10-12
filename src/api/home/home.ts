import Ax from '../axios'
import { header } from '../config'
import { getServiceList, getWonderfulCase } from 'type/index'

import { getSession } from '../../tool'


/**
 * 获取首页banner
 * @version v1
 * @method GET
 * @param {number} city_id
 */
export async function getBanners (city_id: number) {
  const res = await Ax.get('/api/banners',{
    params: {
      city_id: city_id,
      type: 'home',
      page: 1,
      pageSize: 8
    },
    headers: header(1)
  })
  const { result } = res.data
  return {
   banners: result.map((item:any) => ({
    id: item.id,
    link: item.link,
    pic_url: item.pic_url,
    title: item.title,
   }))
  }
}
/**
 * 获取首页导航栏
 * @version v1
 * @method GET
 */
export async function getNavigation () {
  const res = await Ax.get('/api/home/app_navigations', {
    headers: header(1)
  })
  const { result } = res.data
  return {
    navigations: result.map((item:any) => ({
      id: item.id,
      title: item.title,
      pic_url: item.pic_url
    }))
  }
}
/**
 * 获取邻汇头条
 * @version v2
 * @method GET
 */
export async function getHeadlineNews () {
  const res = await Ax.get('/api/articles', {
    params: {
      article_type_id: 17
    },
    headers: header(2)
  })
  const { result } = res.data
  return {
    headLine: result.map((item:any) => ({
      id: item.id,
      title: item.name,
      origin: item.origin || null
    }))
  }
}

/**
 * 获取精彩案例
 * @version v1
 * @method GET
 * @param {WonderfulCase} obj
 */
export async function getWonderfulCase (obj: getWonderfulCase) {
  const res = await Ax.get('/api/activity_cases', {
    params: obj,
    headers: header(1)
  })
  const { result } = res.data
  return {
    caseLists: result.data.map((item: any) => ({
      id: item.id,
      title: item.title,
      pic_url: item.cover_pic_url
    }))
  }
}
/**
 * 获取优质服务商
 * @version v1
 * @method GET
 * @param {WonderfulCase} obj 
 */
export async function getServiceList (obj: getServiceList) {
  const res = await Ax.get('/api/service_provider', {
    params: obj,
    headers: header(1)
  })
  const isLogin = getSession('isLogin')
  const { result } = res.data
  return {
    serviceLists: result.data.map((item: any) => ({
      id: item.id,
      company: item.company,
      address: item.office_location,
      pic_url: item.pic_url,
      mobile: isLogin ? item.mobile : '电话:登录后查看号码'
    }))
  }
}
/**
 * 
 */
export async function getLinHuiData () {
  const res = await Ax.get('/api/home/linhui_data', {
    headers: header(1)
  })
  const { result } = res.data
  return { 
    linHuiData:  {
      city_counts: 0,
      area_sum: 0,
      physical_counts: 0,
      people_sum: 0,
      origin_city_counts: result.opened_city_counts,
      origin_area_sum: result.physical_area_sums,
      origin_physical_counts: result.physical_counts,
      origin_people_sum:result.physical_people_sums,
      time: 2
    }
  }
}
