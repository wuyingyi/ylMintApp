class Operation {
  // 构造
  constructor(page) {
    this.page = page;
  }

  bindEvents() {
    var page = this.page;
    //event 图片预览
    //点赞
    page.praiseCut = (e) => {
      console.log(e)
      var index = e.currentTarget.dataset.index;
      var lists = page.data.lists
      console.log(lists)
      lists[index].praise = !(lists[index].praise || false);
      page.setData({ lists })
    }
    //收藏
    page.collectCut = (e) => {
      console.log(e)
      var index = e.currentTarget.dataset.index;
      var lists = page.data.lists
      console.log(lists)
      lists[index].collect = !(lists[index].collect || false);
      page.setData({ lists })
    }
   page.share = (e) => {
      console.log(12)
      onShareAppMessage()
    }
    //其它事件
  }
  //bindEvents :end;
}

//导出组件类
module.exports.Operation = Operation;
