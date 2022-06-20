// pages/meishi/meishi.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
  t1:0,
  t2:0,
 
  }, 

shuru:function(e){
  var that = this
  console.log(e)
  console.log()
  that.setData({
   t0:e.detail.value.t  
  })
  var t2 = that.data.t0
  console.log(t2)
  wx.request({
    url: 'https://api.ownthink.com/bot?spoken=${t2} ',
    nethod:'GET',
    success(res){
      console.log(res)
     //console.log(res.data.data)
     // console.log(res.data.data.info)
     // console.log(res.data.data.info.text)
      that.setData({
        t1:res.data.data.info.text
      })
      
    }

  })
},


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady:function() {
  wx.setNavigationBarTitle({
    title: '搞笑机器人',
  })
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

  },
})
 