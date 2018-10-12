
export interface getWonderfulCase {
  page_size: number
  city_id: number
}
export interface getServiceList {
  pageSize?: number
  page?: number
  city_id?: number
  
}
export interface banners {
  id: number
  link: string
  pic_url: string
  title: string
}

export interface navigations {
  id: number
  title: string
  pic_url: string
}
export interface headLine {
  id: number
  title: number
  origin: string | null
}
export interface caseLists {
  id: number
  title: string
  pic_url: string
}

export interface serviceLists {
  id: number
  company: string
  address: string
  pic_url: string
  mobile: string | number
}