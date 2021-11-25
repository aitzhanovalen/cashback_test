const express = require("express");
const router = express.Router();
const MerchantModel = require("../../models/merchant");

router.get("/", async(req, res) => {
    console.log('ok')
    const m_id = req.query.id
    console.log(m_id)
    res.status(200).send('ok')
});


module.exports = router;