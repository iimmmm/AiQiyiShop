window.onload=function(){
    let json = [
    {
        "img":"https://mall3.iqiyipic.com/mall/20181206/85/69/mall_5c0941f774d579560a1f8569_1x1.jpg",
        "title":"入耳式蓝牙耳机",
        "title1":"迷你无线",
        "title2":"自带充电仓",
        "price":"￥29.9",
        "sell":"已售 12769",
    },
    {
        "img":"https://mall8.iqiyipic.com/mall/20191010/ea/a1/mall_5d9ed107d2999d474daeeaa1_1x1.jpg",
        "title":"防水运动手环",
        "title1":"彩屏智能",
        "title2":"微信来电提醒",
        "price":"￥29.9",
        "sell":"已售 5409",
    },
    {
        "img":"https://mall9.iqiyipic.com/mall/20190211/61/80/mall_5c613ee474d5795611fe6180_1x1.jpg",
        "title":"20000毫安快充充电宝",
        "title1":"大容量",
        "title2":"移动电源",
        "price":"￥29.9",
        "sell":"已售 11004",
    },
    {
        "img":"https://mall5.iqiyipic.com/mall/20180822/d0/75/mall_5b7d62ad74d57956114ad075_1x1.jpg",
        "title":"手机唱歌神器",
        "title1":"全民k歌",
        "title2":"无线蓝牙麦克风",
        "price":"￥39",
        "sell":"已售 4959",
    },
    {
        "img":"https://mall3.iqiyipic.com/mall/20180416/6d/0a/mall_5ad4674314d4557a75bb6d0a_1x1.jpg",
        "title":"颈椎按摩器颈部多功能家用靠垫",
        "title1":"智能操作",
        "title2":"仿真人8D揉捏",
        "price":"￥79",
        "sell":"已售 14600",
    },
    {
        "img":"http://mall0.iqiyipic.com/mall/20200223/da/5a/mall_5e51f54c1fc4115f911cda5a_1x1.jpg",
        "title":"爱情公寓5同款T恤",
        "title1":"情侣装",
        "title2":"猪猪公寓",
        "price":"￥99",
        "sell":"已售 38",
    },
    {
        "img":"https://mall4.iqiyipic.com/mall/20191122/34/b6/mall_5dd7928a1fc411d9981034b6_1x1.jpg",
        "title":"多彩蓝牙耳机",
        "title1":"无线蓝牙",
        "title2":"电量显示 语音控制",
        "price":"￥39.9",
        "sell":"已售 2316",
    },
    {
        "img":"https://mall3.iqiyipic.com/mall/20191125/ac/87/mall_5ddb8b06b962f6b61490ac87_1x1.jpg",
        "title":"爱奇艺电视果4k",
        "title1":"4K新品",
        "title2":"人工智能投屏看电视",
        "price":"￥228",
        "sell":"已售 1738",
    },
    {
        "img":"https://mall9.iqiyipic.com/mall/20190823/aa/46/mall_5d5f4914f6882e3346f6aa46_1x1.jpg",
        "title":"整箱装抽纸",
        "title1":"蓝漂本色",
        "title2":"18包3层",
        "price":"￥19.9",
        "sell":"已售 10860",
    },
    {
        "img":"https://mall3.iqiyipic.com/mall/20200219/f3/e8/mall_5e4cb6392455d7b46d7af3e8_1x1.png",
        "title":"一次性口罩垫50片",
        "title1":"复工bi备",
        "title2":"含熔喷过滤层布",
        "price":"￥119",
        "sell":"已售 681",
    },
]

let list = document.querySelector('.Selected_max_b');
for(const {img,title,title1,title2,price,sell} of json){
    list.innerHTML += `<div class="Selected_max_b_1">
                    <ul>
                    <li><img src="${img}" alt=""></li>
                    <li>${title}</li>
                    <li><h4>${title1}</h4><span>${title2}</span></li>
                    <li><i>${price}</i><a href="">${sell}</a></li>
                    </ul>
            </div>`
}




let json1 = [
    {
    "title":"大主宰",
    "url":"https://mall.iqiyi.com/kszt/daZhuZhai200217.html",
    "shopPrice":"正版周边热血来袭",
    "img":"http://pic2.iqiyipic.com/common/20200219/0a205987a2cc4def88da62409edab0bd.jpg"},
    {
    "title":"绝代双骄",
    "url":"https://mall.iqiyi.com/kszt/siblingsJueDai200115.html",
    "shopPrice":"双骄争锋 正版来袭",
    "img":"http://pic2.iqiyipic.com/common/20200116/d22008b87dd24ae4bbcba56e8e127930.jpg"},
    {
    "title":"爱情公寓5",
    "url":"https://mall.iqiyi.com/kszt/iPartment191227.html",
    "shopPrice":"明星同款 独家发售",
    "img":"http://pic0.iqiyipic.com/common/20200107/1ab52935b9c945608f992c9c748333e4.jpg"},
    {
    "title":"剑王朝",
    "url":"https://mall.iqiyi.com/kszt/jianWangChao191210.html",
    "shopPrice":"现女友福利大放送",
    "img":"http://pic0.iqiyipic.com/common/20191211/64cf7cd2fb4f475189a3c03442902355.jpg"},
    {
    "title":"潮流合伙人",
    "url":"https://mall.iqiyi.com/kszt/chenXiYuan190712.html",
    "shopPrice":"敢潮 不赶潮",
    "img":"http://pic2.iqiyipic.com/common/20200228/10046f11435f4ab7839c98f8a259993c.jpg"},
    {
    "title":"潮流有货旗舰店",
    "url":"https://mall.iqiyi.com/kszt/fourtryotc191205.html",
    "shopPrice":"合伙人 同期潮品",
    "img":"http://pic3.iqiyipic.com/common/20191205/63f2dffa33a94e7aab222b4ebd3203d9.jpg"},
    {
    "title":"妻子的浪漫旅行",
    "url":"https://mall.iqiyi.com/kszt/qiZi191128.html",
    "shopPrice":"正版周边 甜蜜起航",
    "img":"http://pic2.iqiyipic.com/common/20191128/cc45d2b86fd942f59fb97ecbdb718367.jpg"},
    {
    "title":"这样唱好美",
    "url":"https://mall.iqiyi.com/kszt/missVoice191115.html",
    "shopPrice":"好美精品 低至6折",
    "img":"http://pic3.iqiyipic.com/common/20191115/6a0782a775864a45a76b269c7c287f4f.jpg"},
    {
    "title":"热血同行",
    "url":"https://mall.iqiyi.com/kszt/ysf20190130.html?innerPath=ip_xqn",
    "shopPrice":"正版周边 即刻拥有",
    "img":"http://pic3.iqiyipic.com/common/20191113/b7fb63fceb2141cfb9b2d5587a89641e.jpg"},
    {
    "title":"BABAMA STORE",
    "url":"https://mall.iqiyi.com/kszt/oldMasterQ191110.html",
    "shopPrice":"老夫子联名系列",
    "img":"http://pic1.iqiyipic.com/common/20191112/6602315061674d2fb16f8695c4616fd0.jpg"},
    {
    "title":"热血少年",
    "url":"https://mall.iqiyi.com/kszt/hotBloodYouth191022.html",
    "shopPrice":"正版周边 火热开售",
    "img":"http://pic1.iqiyipic.com/common/20191022/72dbdcb1fa4743e6b537e472b9581962.jpg"},
    {
    "title":"初恋那件小事",
    "url":"https://mall.iqiyi.com/kszt/firstLove191021.html",
    "shopPrice":"正版周边热卖中",
    "img":"http://pic2.iqiyipic.com/common/20191022/5242d037007d4de098ea01d80a6ae131.jpg"},
    {
    "title":"攀登者",
    "url":"https://mall.iqiyi.com/kszt/climbers190927.html",
    "shopPrice":"无畏风雪 全面开售",
    "img":"http://pic3.iqiyipic.com/common/20190930/4517798b91e14371b1f1560a3fa3b68b.jpg"},
    {
    "title":"飞行少年",
    "url":"https://mall.iqiyi.com/kszt/feiXingShaoNianIp190923.html",
    "shopPrice":"壮志凌云 逆风而上",
    "img":"http://pic2.iqiyipic.com/common/20190925/74f176f31c42453d83c7f5ebfb090b3e.jpg"},
    {
    "title":"我在未来等你",
    "url":"https://mall.iqiyi.com/kszt/wfyInTheFuture190906.html",
    "shopPrice":"正品19元起 寄给未来的自己",
    "img":"http://pic0.iqiyipic.com/common/20190909/362a38112bdb4734937a2f2c435c1289.jpg"},
    {
    "title":"做家务的男人",
    "url":"https://mall.iqiyi.com/kszt/manDoHousework190801.html",
    "shopPrice":"同款周边首发5折起",
    "img":"http://pic1.iqiyipic.com/common/20190802/cf2f7e79e1dc4477b6220dc099cba3d0.jpg"},
    {
    "title":"小欢喜正版周边",
    "url":"https://mall.iqiyi.com/kszt/xiaoHuanXi190730.html",
    "shopPrice":"热销商品低至19元",
    "img":"http://pic1.iqiyipic.com/common/20190731/d50a598dcd5f44b3b3cff1bc0e9dd378.jpg"},
    {
    "title":"名侦探柯南",
    "url":"https://mall.iqiyi.com/kszt/kenan190611.html",
    "shopPrice":"柯南官方正版周边",
    "img":"http://pic2.iqiyipic.com/common/20190611/39c79dc977ba46ac84b19e476555f671.jpg"},
    {
    "title":"惊奇队长正版周边",
    "url":"https://mall.iqiyi.com/kszt/captainMarvel190311.html?innerPath=jqdz0311",
    "shopPrice":"4折起火爆开抢",
    "img":"http://pic3.iqiyipic.com/common/20190311/c0636ddcff28471596d483258aa45622.jpg"},
    {
    "title":"歌手",
    "url":"https://mall.iqiyi.com/kszt/singer20190213.html?innerPath=ip_singer",
    "shopPrice":"正版周边闪耀发布",
    "img":"https://pic2.iqiyipic.com/common/20190218/29298f8462d44c9ca7b85a9be01c1ab8.jpg"},
    {
    "title":"你和我的倾城时光",
    "url":"https://mall.iqiyi.com/kszt/OurGlamorousTime.html?innerPath=ip_OurGlamorousTime",
    "shopPrice":"正版周边同步热卖",
    "img":"https://pic2.iqiyipic.com/common/20181115/1ffd8f22bc6d4c19bc8864795769d243.jpg"},
    {
    "title":"豆瓣电影TOP50精彩原著",
    "url":"https://mall.iqiyi.com/kszt/BookDBtop50.html?innerPath=ip_BDBtop50",
    "shopPrice":"回味人生 经典必读",
    "img":"https://pic2.iqiyipic.com/common/20180815/ccce257cf37c4f55ad57665fbde47a8e.jpg"},
]


let list1 = document.querySelector('.sell_max_l');
for(const {img,title,shopPrice,} of json1){
    list1.innerHTML += `
    
    <div class="list clear_fix">
      <div class="list_title">
        
          <h4>${title}</h4>
        <a href="">${shopPrice}</a>
        
      </div>
      <img src="${img}" alt="">
    </div>
  
    
    `
}

//轮播图
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2500,//时间 毫秒
        disableOnInteraction: false,//用户操作之后是否停止自动轮播默认true 
       },
       
    
   
  })   
  mySwiper.el.onmouseover = function(){
    mySwiper.autoplay.stop();
  }
  
  //鼠标离开开始自动切换
  mySwiper.el.onmouseout = function(){
    mySwiper.autoplay.start();
  }   
  
  mySwiper.el.onmouseover=function(){
    mySwiper.navigation.$nextEl.removeClass('hide');
    mySwiper.navigation.$prevEl.removeClass('hide');
  }
  mySwiper.el.onmouseout=function(){
    mySwiper.navigation.$nextEl.addClass('hide');
    mySwiper.navigation.$prevEl.addClass('hide');
  }


  $(window).scroll(() => {
    // 通过判断卷去的高度来决定
    if ($(window).scrollTop() >= 300) {
      // 让回到顶部按钮显示
      $('.nth').fadeIn()
    } else {
      // 让回到顶部按钮隐藏
      $('.nth').fadeOut()
    }
  })

  // 2. 点击按钮的时候让页面回到顶部
  $('.nth').click(() => {
    // 让页面回到顶部 -> 滚回去
    //   让页面滚回去, 需要用到 animate() 函数
    //   滚动的不是窗口, 是页面
    //   所以我们是在这里让 页面的 scrollTop 变成 0
   
  //   $('html').animate({
  //     scrollTop: 0
  //   }, 1000)

  //   // animate 是要操作元素的
  //   // document 是根节点 不是 元素
  //   // html 是根元素节点
  // })

  $('html').stop().animate({
     scrollTop:0
    }, 1000);
  return false;
  });

}




