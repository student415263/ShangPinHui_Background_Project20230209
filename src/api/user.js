import request from '@/utils/request'

/**
 * http://39.98.123.211:8170/swagger-ui.html
   http://39.98.123.211:8216/swagger-ui.html
 */

export function login(data) {
  return request({
    // url: '/vue-admin-template/user/login',
    url: '/admin/acl/index/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    // url: '/vue-admin-template/user/info',
    url: '/admin/acl/index/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    // url: '/vue-admin-template/user/logout',
    url: '/admin/acl/index/logout',
    method: 'post'
  })
}
