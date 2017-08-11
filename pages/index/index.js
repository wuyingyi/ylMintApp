//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    praise:false,
    collect:false,
    arrs: [],
    imgUrls:[
      "../../image/top.jpg",
      "../../image/top1.jpg",
      "../../image/top2.jpg"
    ],
    lists: [
      { id: "001", imgurl: "../../image/top.jpg", address: "上海", name:'一季花开、一季花落',  content: '人生最可怕的事，是一边后悔一边生活。知道那么多大道理，却依然过不好这一生。\r\n反过来想想，也许正是因为我们知道的大道理既不够多，也不够深，才让我们无法在思想中融会贯通，形成一套自己的思维习惯和行为习惯，从而在自相矛盾的大道理中无法前行。', },
      { id: "002", imgurl: "../../image/top1.jpg", address: "北京", name:'念·夕夏', content:'埋下一座城、关了所有灯。' },
      { id: "003", imgurl: "../../image/top2.jpg", address: "天津", name: '烟雨如墨き', content:'把爱写成兵临城下的不朽传奇、那么、你会不会不辞冰雪披荆斩棘地奔赴而来。' },
      { id: "004", imgurl: "../../image/top3.jpg", address: "石家庄", name: '听风忆雪', content:'爱尔兰雪、土耳其蓝、莫斯科眼泪。我都收藏在小小的太阳里、还有晴天和微笑。\r\n波斯湾海、维也纳厅、阿拉伯传说。我都纪念在厚厚的相集里。还有七粉和公主。'},
      { id: "005", imgurl: "../../image/top.jpg", address: "大理", name: '︴紫竹語嫣﹏', content:'我有没有跟你说过爱是我不变的信仰、我有没有告诉过你爱就是永远把一个人放在心上。'},
      { id: "006", imgurl: "../../image/top1.jpg", address: "巴黎", name: '时光从指尖划过︶',content:'那些纠缠到深夜里的流言蜚语我不怕让你听到、也不怕让全世界听到。我是怕你听到了、并相信。 '},
      { id: "007", imgurl: "../../image/top2.jpg", address: "天津", name: '南故笙烟', content:'爱你、给你我生命所有的美好、然后退场、让万花筒灿烂你的眼瞳。'},
      { id: "008", imgurl: "../../image/top3.jpg", address: "伦敦", name: '﹏柠檬少年心亦暖′', content:'我想看一场盛大的流行陨落的过程、我要一直不停许愿、许到沧海桑田瞬息万变直到靠近你微笑淡晴的脸。'}
    ],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShareAppMessage:function(){
    return {
      title: '首页',
      path: 'pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo,
        // content: content
      })
    })
  },

  //点赞
  praiseCut: function (e){
    console.log(e)
    var index = e.currentTarget.dataset.index;  
    var lists = this.data.lists
    lists[index].praise = false 
    this.setData({ lists })
  },
  praisecutCancel: function (e) {
    console.log(e)
    var index = e.currentTarget.dataset.index;  
    var lists = this.data.lists
    lists[index].praise = true
    this.setData({ lists })
  },

  //收藏
  collectCut: function (e) {
    console.log(e)
    var index = e.currentTarget.dataset.index;
    var lists = this.data.lists
    lists[index].collect = false
    this.setData({ lists })
  },
  collectCancel: function (e) {
    console.log(e)
    var index = e.currentTarget.dataset.index;
    var lists = this.data.lists
    lists[index].collect = true
    this.setData({ lists })
  },
  //分享
  share:function(){
    console.log(12)
    onShareAppMessage()
  }
  
})
