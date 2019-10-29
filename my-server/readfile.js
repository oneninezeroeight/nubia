const fs = require('fs')
const {
    insert
} = require('./CURD/curd')
fs.readFile("./viewnews.json", {
    encoding: 'utf8',
    flag: 'r'
}, (err, data) => {
    if (err) throw err;
    const datas = JSON.parse(data);
    for (var i in datas) {
        src = datas[i].src
        h3 = datas[i].h3
        p = datas[i].p
        insert('viewnews', [{
            _id: i,
            src: src,
            h3: h3,
            p: p
        }])
    }
})