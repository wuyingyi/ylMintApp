// opinion.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    commentTxtCount: 600,
    signTxt: 16,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
//建议内容控制
  commentTxtFn:function(e){
    var len = 600 - (e.detail.value).length;
    if(len<=20){
      this.setData({
        commentTips: true
      })
    } else{
      this.setData({
        commentTips: false
      })
    }
    this.setData({
      commentTxtCount:len
    })
  },
//署名内容字数控制
  signTxtFn:function(e){
    var len = 16 - (e.detail.value).length;
    if(len<5){
      this.setData({
        sigmTips: true
      })
    }else{
      this.setData({
        sigmTips: false
      })
    }
    this.setData({
      signTxt: len
    })
  }

})