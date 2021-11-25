const express = require("express");
const router = express.Router();
const MerchantModel = require("../../models/merchant");
const {addPriceToProduct} = require('../../controllers/product')

//При установке продавцом размера кэшбека, добавит данный кэшбек на товар
router.post("/", async(req, res) => {
    const {p_id,m_id,price,cashback_percent} = req.body

    //simple validation
    if(price<0){
        return res.status(400).send({
            status:400,
            message:'Invalid price'
        })
        
    }
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

    //adding price and cashback to product
    addPriceToProduct(p_id,merchant._id,price,cashback_percent)
    res.status(200).send({
        status:'success',
        message:'Price and cashback added'
    })
});

module.exports = router;