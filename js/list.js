window.onload=function(){
    let json = [
        {"title":"肖申克的救赎 文轩网正版图书","title_url":"https://mall.iqiyi.com/item/19rrnn3avs","img":"http://mall3.iqiyipic.com/mall/20171026/b9/ca/mall_59f1812df6882e60af1fb9ca_1x1.jpg","price":"¥25.8"},
        {"title":"霸王别姬 文轩网正版图书","title_url":"https://mall.iqiyi.com/item/19rrnx170k","img":"http://mall1.iqiyipic.com/mall/20170803/56/de/mall_5982ee58f6882e18b03c56de_1x1.jpg","price":"¥26.2"},
        {"title":"阿甘正传 七项奥斯卡提名电影原著 精装《阿甘正传》20周年精装纪念版 温斯顿葛鲁姆 著 外国励志小说 文轩网正版图书","title_url":"https://mall.iqiyi.com/item/19rrngtsmc","img":"http://mall3.iqiyipic.com/mall/20160629/2f/79/mall_5773af1514d4556dc0302f79_1x1.jpg","price":"¥32.5"},
        {"title":"哈佛蓝星双语经典电影导读：千与千寻","title_url":"https://mall.iqiyi.com/item/19rrnxew78","img":"http://mall8.iqiyipic.com/mall/20170718/5f/e4/mall_596db94ead8c1223bea35fe4_1x1.jpg","price":"¥6.3"},
        {"title":"机器人总动员 文轩网正版图书","title_url":"https://mall.iqiyi.com/item/19rro2jc1c","img":"http://mall1.iqiyipic.com/mall/20170913/c1/b2/mall_59b8ac0314d4556195dfc1b2_1x1.jpg","price":"¥19.7"},
        {"title":"预售 海上钢琴师 文轩网正版图书","title_url":"https://mall.iqiyi.com/item/19rrnnwxws","img":"http://mall9.iqiyipic.com/mall/20171024/f4/b0/mall_59eef23714d45561974bf4b0_1x1.jpg","price":"¥37.2"},
        {"title":"《教父》三部曲 文轩网正版图书","title_url":"https://mall.iqiyi.com/item/19rrngtt5g","img":"https://mall4.iqiyipic.com/mall/20160629/80/9a/mall_5773ae4814d4556dc35c809a_1x1.jpg","price":"¥97.3"},
        {"title":"星际穿越","title_url":"https://mall.iqiyi.com/item/19rrnww42w","img":"http://mall6.iqiyipic.com/mall2/20190410/dd/a9/mall2_5cad9c46d2999d09274adda9_1x1.jpg","price":"¥80.7"},
        {"title":"乱世佳人 文轩网正版图书","title_url":"https://mall.iqiyi.com/item/19rrodpj3c","img":"http://mall3.iqiyipic.com/mall/20180614/0e/2e/mall_5b21b8d314d4557219700e2e_1x1.jpg","price":"¥48.2"},
        {"title":"怦然心动:中英双语版 共2册 Flipped 美 文德琳·范·德拉安南著 含英文版原版 电影原著青春情感小说 外国文学书 文轩网正版图书","title_url":"https://mall.iqiyi.com/item/19rro6jqq4","img":"http://mall2.iqiyipic.com/mall/20180330/57/e2/mall_5abdaba714d4557a796057e2_1x1.jpg","price":"¥43.1"},
        {"title":"十二怒汉 文轩网正版图书","title_url":"https://mall.iqiyi.com/item/19rro7hfyo","img":"http://mall0.iqiyipic.com/mall/20180208/37/42/mall_5a7bb1d5d2999d047cfc3742_1x1.png","price":"¥30"},
        {"title":"蝙蝠侠 文轩网正版图书","title_url":"https://mall.iqiyi.com/item/19rro9jrn8","img":"http://mall6.iqiyipic.com/mall/20180117/95/71/mall_5a5f36fbf6882e27061f9571_1x1.jpg","price":"¥42.4"},
        {"title":"疯狂动物城 文轩网正版图书","title_url":"https://mall.iqiyi.com/item/19rrn5iqbw","img":"http://mall4.iqiyipic.com/mall/20170316/c5/0f/mall_58ca4cb418aa7070386dc50f_1x1.jpg","price":"¥19.7"},
        {"title":"活着 文轩网正版图书","title_url":"https://mall.iqiyi.com/item/19rro45mrk","img":"https://mall2.iqiyipic.com/mall/20170831/d4/07/mall_59a82549ad8c1206ec32d407_1x1.jpg","price":"¥30.2"},
        {"title":"大话西游之月光宝盒（蓝光碟 BD25）（京东专卖）","title_url":"https://mall.iqiyi.com/item/19rrnn3pvs","img":"http://mall8.iqiyipic.com/mall/20171026/cc/e0/mall_59f179f174d5792e704bcce0_1x1.png","price":"¥136.1"},
        {"title":"飞屋环游记 文轩网正版图书","title_url":"https://mall.iqiyi.com/item/19rro4lsgo","img":"http://mall8.iqiyipic.com/mall/20170830/e2/fc/mall_59a5eebead8c1206e8abe2fc_1x1.jpg","price":"¥19.7"},
        {"title":"哈尔的移动城堡三部曲之一：哈尔的移动城堡","title_url":"https://mall.iqiyi.com/item/19rro53i3c","img":"http://mall6.iqiyipic.com/mall2/20180516/a6/4d/mall2_5afbfb7514d455721ac3a64d_1x1.jpg","price":"¥28.5"},
        {"title":"V字仇杀队","title_url":"https://mall.iqiyi.com/item/19rrnnznf8","img":"http://mall8.iqiyipic.com/mall/20170928/fd/d6/mall_59cc90efd2999d3d6894fdd6_1x1.jpg","price":"¥56.3"},
        {"title":"死亡诗社","title_url":"https://mall.iqiyi.com/item/19rro8rdhk","img":"http://mall1.iqiyipic.com/mall2/20180118/c9/07/mall2_5a5f982274d5794c0253c907_1x1.jpg","price":"¥27"},
        {"title":"教父 文轩网正版图书","title_url":"https://mall.iqiyi.com/item/19rrodohf4","img":"http://mall2.iqiyipic.com/mall/20180615/0d/17/mall_5b23233074d57908d62a0d17_1x1.jpg","price":"¥55.1"},
        
        ]

    let list = document.querySelector('.list');
    for(const {img,title,price} of json){
        list.innerHTML +=`
        <ul>
        <li>
            <a href="">
                <div class="pic"><img src="${img}" alt=""></div>
                <div class="text">
                    <h3>${title}</h3>
                    <p>
                    ${price}
                        <s>${price}</s>
                        <span>立即疯抢</span>
                     </p>
                </div>
            </a>
        </li>
        
        
        `
    }


    // $('.M-box3').pagination({
    //     pageCount: 50,
    //     jump: true,
    //     coping: true,
    //     homePage: '首页',
    //     endPage: '末页',
    //     prevContent: '上页',
    //     nextContent: '下页',
    //     callback: function (api) {
    //         console.log(api.getCurrent())
    //     }
    // });
}