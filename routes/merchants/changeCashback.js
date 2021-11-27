const express = require("express");
const router = express.Router();
const MerchantModel = require("../../models/merchant");
const {changeCashback} = require('../../controllers/product')

//TODO kek

//При установке продавцом размера кэшбека, добавит данный кэшбек на товар
router.post("/", async(req, res) => {
    const {p_id,m_id,cashback_percent} = req.body

    //simple validation
    if(cashback_percent<0){
        return res.status(400).send({
            status:400,
            message:'Invalid cashback percent'
        })
    }
    const merchant = await MerchantModel.findOne({id:m_id})    
    if(!merchant){
        return res.status(400).send({
            status:400,
            message:'Invalid merchant id'
        })
    }

    var isInArray = merchant.products.some(function (product) {
        return product.equals(p_id);
    });
    if(!isInArray){
        return res.status(400).send({
            status:400,
            message:'Invalid product id'
        })
    }

    //changing cashback to product
    console.log(merchant)
    changeCashback(p_id,merchant._id,cashback_percent)
    res.status(200).send({
        status:'success',
        message:'Cashback changed'
    })
});

module.exports = router;