const express = require("express");
const router = express.Router();
const MerchantModel = require("../../models/merchant");
const OrderModel = require("../../models/order");

router.get("/", async(req, res) => {
    const m_id = req.query.id
    const merchant = await MerchantModel.findOne({id:m_id})
    const orders = await OrderModel.find({merchant_id:merchant._id}).select('-_id -product_id -createdAt -updatedAt -id -__v -merchant_id').lean()

    for(let i = 0; i < orders.length; i++){
        const total_percent = orders[i].cashback_percent
        let obj={
            "bank":merchant.cashback_percents.bank,
            "payment_system":merchant.cashback_percents.payment_system,
            "merchant":parseFloat(total_percent) - (parseFloat(merchant.cashback_percents.bank) +parseFloat(merchant.cashback_percents.payment_system))
        }
        orders[i].cashback_percent = obj
    }

    res.status(200).send({
        status:200,
        data:orders
    })
});


module.exports = router;