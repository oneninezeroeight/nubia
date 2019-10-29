var request = require('request');
const {
    insert
} = require('./CURD/curd')
request('https://m.nubia.com/show/page/fetch/cateInfos', function (error, response, body) {
    const news = JSON.parse(body);
    const datas = news.data.result;
    for (var i in datas) {
        arrays = datas[i];
        cate_id = arrays.cate_id;
        cate_name = arrays.cate_name;
        infosdata = arrays.infos;
        indexdatas = [];
        for (var j in infosdata) {
            array = infosdata[j]
            data = {}
            // data.sub_title = array.sub_title
            // data.title = array.title
            // typeof (array.block_products) == 'object' ? data.price = array.block_products.price: data.price = ""
            // typeof (array.block_products) == 'object' ? data.original_price = array.block_products.original_price: data.original_price = ""
            // data.src = `https://oss.static.nubia.cn/${array.small_image}`
            data.id = array.spec_id
            data.name = array.product_name + "" + array.color_name
            data.image_id = `https://oss.static.nubia.cn/${array.image_id}`
            indexdatas.push(data)
        }
        insert('cateInfos', [{
            _id: i,
            cate_id: cate_id,
            cate_name: cate_name,
            infos: indexdatas,
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