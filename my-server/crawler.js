var request = require('request');
const {
    insert
} = require('./CURD/curd')
request('https://m.nubia.com/show/page/block?pageType=5', function (error, response, body) {
    const news = JSON.parse(body);
    const datas = news.data;

    for (var i in datas) {
        arrays = datas[i];
        //     cate_id = arrays.cate_id;
        //     cate_name = arrays.cate_name;
        //     infosdata = arrays.infos;
        indexdatas = [];
        for (var j in arrays) {
            array = arrays[j]
            data = {}
            data.sub_title = array.sub_title
            data.title = array.title
            typeof (array.block_products) == 'object' ? data.price = array.block_products.price: data.price = ""
            typeof (array.block_products) == 'object' ? data.original_price = array.block_products.original_price: data.original_price = ""
            data.src = `https://oss.static.nubia.cn/${array.small_image}`
            // data.id = array.id
            //         // title = array.title
            //         // id = array.id
            //         // small_image = array.small_image
            indexdatas.push(data)
        }
        insert('index', [{
            _id: i,
            datas: indexdatas,
        }])
    }
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