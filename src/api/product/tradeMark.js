
import request from '@/utils/request'
// 获取品牌管理列表：/admin/acl/user/{page}/{limit}
// or     /admin/product/baseTrademark/{page}/{limit}

export const reqGetTradeMarkList = (page, limit) => {
  return request({
    // url: `/admin/acl/user/${page}/${limit}`,
    url: `/admin/product/baseTrademark/${page}/${limit}`,
    method: 'get'
  })
}

// 添加/修改 商品管理    添加： /admin/product/baseTrademark/save ||-- 品牌名称和品牌logo, ID服务器生成
export const reqAddTradeMarkList = (data) => {
  return request({
    method: 'post',
    url: '/admin/product/baseTrademark/save',
    data // 数据（参数） 两个参数
  })
}
// 修改:  /admin/product/baseTrademark/update  ||-- id tmName tmLogo    three props/data
export const reqUpdateTradeMarkList = (data) => {
  return request({
    method: 'put',
    url: '/admin/product/baseTrademark/update',
    data // 三个参数
  })
}

// Delete    /admin/product/baseTrademark/remove/{id}   method  delete
export const reqDeleteTradeMarkList = (id) => {
  return request({
    url: `/admin/product/baseTrademark/remove/${id}`,
    method: 'delete'
  })
}

