// 仅在开发环境下使用mock数据
if (process.env.API.mock) {
  require('@/mock/index.js')
}

export default class Server {

  constructor(params) {

  }

  _errReporter(error) {
    return { "dataResult": [], "extra": "", "msg": (error.response.data.message || "服务异常，请联系管理员"), "statusCode": "-1" };
  }

  _axios(url, param) {
    return new Promise((resolve) => {
      $axios.post(url, param).then((response) => {
        console.log(url, response)
        resolve(response);
      }).catch((error) => {
        resolve(this._errReporter(error));
      })
    })
  }


  /**
    * 拉取列表数据
    */
  getVendors(param = {}) {
    // return this._axios(`${process.env.API.emsBaseDataURL}/vendor/findPagedVendorList`, param)
    return this._axios(`${process.env.API.emsBaseDataURL}/vendor/findVendorListByType`, param)
  }

}