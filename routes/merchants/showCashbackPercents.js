const express = require("express");
const router = express.Router();
const MerchantModel = require("../../models/merchant");

//Добавляет мерчанту три вида кэшбека
router.get("/", async(req, res) => {
    const m_id = req.query.id

    const merchant = await MerchantModel.findOne({id:m_id})
    if(!merchant){
        return res.status(400).send({
            status:400,
            message:'Invalid merchant id'
        })
    }

    res.status(200).send({
        status:200,
        cashback:merchant.cashback_percents,
        cashback_type:merchant.cashback_type
    })
});

module.exports = router;