var express = require('express');
var router = express.Router();
const {
    insert,
    find
} = require('../CURD/curd')

router.get("/", async function (req, res, next) {
    let phone = req.query.phone;
    let password = req.query.password;;
    let data = await find('user', {
        phone: 13113419964
    });
    let str = "注册失败，此手机号码已存在"
    if (phone != data[0].phone) {
        insert('user', [{
            phone: phone,
            password: password
        }])
        str = "注册成功"
    }
    res.json({
        str
    })

});;

module.exports = router;