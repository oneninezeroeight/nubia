var express = require('express');
var router = express.Router();
const {
    insert,
    find
} = require('../CURD/curd')

router.get("/", async function (req, res, next) {
    let user = req.query.username;
    let password = req.query.password;;
    let data = await find('user', {
        username: user,
        password: password
    });
    let str = ""
    if (user != data[0].username) {
        str = "用户名错误"
    }else if(password=data[0].password){
        str="登录成功"
    }
    res.json({
        str
    })

});;

module.exports = router;