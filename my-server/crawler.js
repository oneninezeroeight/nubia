var request = require('request');
const {
    insert
} = require('./CURD/curd')
request('https://m.nubia.com/viewnews.php?isAjax=1&page=1', function (error, response, body) {
    const news = JSON.parse(body);
    const datas = news.data;
    console.log(datas[0]);

    // for (var i in datas) {
    //     arrays = datas[i];
    //     cate_id = arrays.cate_id;
    //     cate_name = arrays.cate_name;
    //     infosdata = arrays.infos;
    //     infos = [];
    //     for (var j in infosdata) {
    //         array = infosdata[j]
    //         info = {}
    //         info.title = array.color_name + " " + array.product_name
    //         info.image_id = `https://oss.static.nubia.cn/${array.image_id}`
    //         info.id = array.spec_id
    //         // title = array.title
    //         // id = array.id
    //         // small_image = array.small_image
    //         infos.push(info)
    //     }
    //     insert('cateInfos', [{
    //         cate_id: cate_id,
    //         cate_name: cate_name,
    //         infos: infos
    //     }])
    // }
    // var a = $("img")
    // var arr = []
    // for (var i = 0; i < a.length; i++) {
    //     var o = {}
    //     o.src = $("img").eq(i).attr("src")
    //     o.h3 = $("h3").eq(i).text()
    //     o.p = $(".news-wrap-info").eq(i).text()
    //     arr.push(o)
    // }
    // console.log(JSON.stringify(arr));
});