var express = require('express');
var router = express.Router();
const {
    find
} = require('../CURD/curd')

router.get("/", async function (req, res, next) {
    let indexData = await find('index')
    res.json({
        indexData
    })
})
module.exports = router;