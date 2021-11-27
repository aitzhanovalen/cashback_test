const express = require("express");
const router = express.Router();
const MerchantModel = require("../../models/merchant");

//Добавляет мерчанту три вида кэшбека
router.post("/", async(req, res) => {
    const {merchant_id,cashback_type,cashback} = req.body

    const merchant = await MerchantModel.findOne({id:merchant_id})
    if(!merchant){
        return res.status(400).send({
            status:400,
            message:'Invalid merchant id'
        })
    }
    merchant.cashback_type = cashback_type
    merchant.cashback_percents = cashback

    await merchant.save()
    res.status(200).send(merchant)
});

module.exports = router;