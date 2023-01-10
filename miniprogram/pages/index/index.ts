// index.ts
// 获取应用实例
const app = getApp<IAppOption>()
const order = ['green', 'blue', 'red']
Page({
  data: {
    topView: 'green',
    scrollTop: 0,
    motto: 'Hello World...',
    theName: 'Jack',
    flag: false,
    items:[
      {name:'q2'},
      {name:'w3'},
    ],
    item: {
      name:"三七",
      phone:"1555555555555",
      address:"沣西管委会",
    },
    colorValue:'orange',
    condition: Math.floor(Math.random()*3+1),
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: 
    wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  toRefreshPage() {
    wx.navigateTo({
      url: '../scrollview/index',
    })
  },
  toButtonPage() {
    wx.navigateTo({
      url: '../button/button',
    })
  },
  tocheckboxPage() {
    wx.navigateTo({
      url: '../checkbox/checkbox',
    })
  },
  toFormPage() {
    wx.navigateTo({
      url: '../form/form',
    })
  },
  toInputPage() {
    wx.navigateTo({
      url: '../input/input',
    })
  },
  onLoad() {
    // @ts-ignore
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  clickMe(e){
      console.log(e);
  },
  clickA(){
    console.log('click container A');
    this.toButtonPage();
},
clickB(){
  console.log('click container B');
  this.tocheckboxPage();
},
clickC(){
  console.log('click container C');
 
},

captureclickA(){
  console.log('captureclickA container A');
},
captureclickB(){
console.log('captureclickB container B');
},
captureclickC(){
console.log('captureclickC container C');
// this.toFormPage();
this.toInputPage();
},
  getUserProfile() {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e: any) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  onShareAppMessage() {
    return {
      title: 'scroll-view',
      path: 'page/component/pages/scroll-view/scroll-view'
    }
  },
  upper(e) {
    console.log(e)
  },

  lower(e) {
    console.log(e)
  },

  scroll(e) {
    console.log(e)
  },

  scrollToTop() {
    this.setAction({
      scrollTop: 0
    })
  },

  tap() {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.topView) {
        this.setData({
          topView: order[i + 1],
          scrollTop: (i + 1) * 40
        })
        break
      }
    }
  },

  tapMove() {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
}













)
