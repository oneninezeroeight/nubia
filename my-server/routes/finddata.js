var express = require('express');
var router = express.Router();
const {
    find
} = require('../CURD/curd')

router.get("/", async function (req, res, next) {
    let cuteid = req.query.cuteid * 1;
    let goodid = req.query.goodid;
    let goodData;
    let cuteData = await find('cateInfos', {
        cate_id: cuteid
    })
    infos = cuteData[0].infos
    for (var i in infos) {
        if (goodid == infos[i].id) {
            goodData = infos[i]
        }
    }
    res.json({
        goodData
    })
})
module.exports = router;