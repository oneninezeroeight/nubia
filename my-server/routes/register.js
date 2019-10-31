var express = require('express');
var router = express.Router();
const {
    insert,
    find
} = require('../CURD/curd')

router.get("/", async function (req, res, next) {
    let user = req.query.phone;
    let password = req.query.password;;
    let data = await find('user', {
        username: user
    });
    let str = "注册失败，此手机号码已存在"
    if (data.length == 0) {
        insert('user', [{
            username: user,
            password: password
        }])
        str = "注册成功"
    }
    res.json({
        str
    })

});;

module.exports = router;