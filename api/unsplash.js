// githubAuth.js
require('es6-promise').polyfill();
require('isomorphic-fetch');

module.exports = async (req, res) => {
  // 设置请求头允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*");

  const url = 'https://unsplash.com/napi/users/leoonliang/photos?order_by=latest'

  try{
    await fetch(url, {
      method: 'Get',
    }).then(response => {
      return response
    })
  } catch (error) {
    return error
  }
}

