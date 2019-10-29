var express = require('express');
var router = express.Router();
const {
    find
} = require('../CURD/curd')

router.get("/", async function (req, res, next) {
    let newsData = await find('viewnews')
    res.json({
        newsData
    })
})
module.exports = router;