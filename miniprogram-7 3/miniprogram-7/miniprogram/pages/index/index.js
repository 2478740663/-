// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  xian:"昌平区",
  shi:"北京市",
  latitude :"0",
  longitude:"0",
  tianqi:"0",
  feng:"0",
  diwen:"0",
  gaowen:"0"
  },

huoqu:function(e){
    var that = this
    wx.getLocation({
      type: 'wgs84',
      success (res) {
        console.log(res.latitude)
       that.setData({
         latitude : res.latitude,
         longitude : res.longitude
       }) 
      }
    })
wx.request({
          url: 'https://api.map.baidu.com/weather/v1/?district_id=222405&data_type=all&ak=EGWzabImD14MK4Bke2F5KvqdLsgijKuK', //仅为示例，并非真实的接口地址
          success (res) {
            console.log(res.data.result)
            that.setData({
              xian:res.data.result.location.city,
              shi:res.data.result.location.province,
              tianqi:res.data.result.forecasts[0].text_day,
              diwen:res.data.result.forecasts[0].low,
              gaowen:res.data.result.forecasts[0].high,
              feng:res.data.result.forecasts[0].wd_day
            })
          }
        })
},
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
   this.huoqu()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})

