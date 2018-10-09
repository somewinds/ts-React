import Ax from '../axios'
import { header } from '../config'
import { WonderfulCase } from './type'
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
export async function getWonderfulCase (obj: WonderfulCase) {
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

