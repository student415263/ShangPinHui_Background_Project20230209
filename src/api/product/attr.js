
import request from '@/utils/request'

// /admin/product/getCategory2/{category1Id}  get
export const reqGetCategory1List = () => {
  return request({
    url: '/admin/product/getCategory1',
    method: 'get'
  })
}
export const reqGetCategory2List = (category1Id) => {
  return request({
    url: `/admin/product/getCategory2/${category1Id}`,
    method: 'get'
  })
}
export const reqGetCategory3List = (category2Id) => {
  return request({
    url: `/admin/product/getCategory2/${category2Id}`,
    method: 'get'
  })
}

// 获取商品属性：/admin/product/attrInfoList/{category1Id}/{category2Id}/{category3Id}  get
export const reqGetAttrList = (category1Id, category2Id, category3Id) => {
  return request({
    method: 'get',
    url: `/admin/product/attrInfoList/${category1Id}/${category2Id}/${category3Id}`
  })
}

// //admin/product/saveAttrInfo
/* * prop-data
{
  "attrName": "string",
  "attrValueList": [
    {
      "attrId": 0,
      "id": 0,
      "valueName": "string"
    }
  ],
  "categoryId": 0,
  "categoryLevel": 0,
  "id": 0
}
*/
// add and updata
export const reqPostAttrInfo = (data) => {
  return request({
    url: `/admin/product/saveAttrInfo`,
    method: 'post',
    data
  })
}
