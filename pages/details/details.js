import { Operation } from '../../common/operation/operation'; 
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    praise: false,
    collect: false,
    arrs: [],
    contentBtm:true,
    showAuthor:false,
    showTime:false,
    showCode:false,
    author:"——Y",
    times:"2017-8-11 星期五 雨",
    id: "001", 
    imgurl: "../../image/top.jpg", 
    address: "上海",
     name: '一季花开、一季花落',
     content: '人生最可怕的事，是一边后悔一边生活。知道那么多大道理，却依然过不好这一生。\r\n反过来想想，也许正是因为我们知道的大道理既不够多，也不够深，才让我们无法在思想中融会贯通，形成一套自己的思维习惯和行为习惯，从而在自相矛盾的大道理中无法前行。',
     items: [
       { name: 'signature', value: '是否显示签名' },
       { name: 'time ', value: '是否显示时间' },
       { name: 'code', value: '是否显示专属二维码' },
      
     ]
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

  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  //显示名字
  showName:function(){
    var showAuthor = this.data.showAuthor
    this.setData({
      showAuthor: !showAuthor
    })
  },
  //显示时间
  showTime: function () {
    var showTime = this.data.showTime
    this.setData({
      showTime: !showTime
    })
  },
 //显示二维码
  showCode: function () {
    var showCode = this.data.showCode
    this.setData({
      showCode: !showCode
    })
  },
  //生成海报
  createNews:function(){
    var contentBtm = this.data.contentBtm
    this.setData({
      contentBtm:false
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