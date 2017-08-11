// details.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    praise: false,
    collect: false,
    arrs: [],
    id: "001", 
    imgurl: "../../image/top.jpg", 
    address: "上海",
     name: '一季花开、一季花落',
     content: '人生最可怕的事，是一边后悔一边生活。知道那么多大道理，却依然过不好这一生。\r\n反过来想想，也许正是因为我们知道的大道理既不够多，也不够深，才让我们无法在思想中融会贯通，形成一套自己的思维习惯和行为习惯，从而在自相矛盾的大道理中无法前行。',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo,
        // content: content
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})