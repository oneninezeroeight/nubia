var express = require('express');
var router = express.Router();
const {
    find
} = require('../CURD/curd')

router.get("/", async function (req, res, next) {
    let Datas = await find('cateInfos')
    res.json({
        Datas
    })
})
module.exports = router;