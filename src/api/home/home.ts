import Ax from '../axios'
import { header } from '../config'
/**
 * 获取首页banner
 * @version v1
 * @param {number} city_id
 * @returns {object}
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
 * @returns {object}
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
