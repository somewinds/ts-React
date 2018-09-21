import Ax from './axios'
import { header } from './header'

export async function getBanners (city_id: number) {
  const res = await Ax.get('/api/banners',{
    headers: header(1),
    params: {
      city_id: city_id,
      type: 'home',
      page: 1,
      pageSize: 8
    }
  })
  const { data } =res
  return {
   lists: data.result
  }
}