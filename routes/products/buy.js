const express = require("express");
const router = express.Router();
const MerchantModel = require("../../models/merchant");
const CustomerModel = require("../../models/customer");
const {buyProduct} = require('../../controllers/product')

router.post("/", async(req, res) => {
    const {m_id,c_id,p_id,price,cashback_percent} = req.body

    //simple validation
    if(cashback_percent<0){
        return res.status(400).send({
            status:400,
            message:'Invalid cashback percent'
        })
    }
    const merchant = await MerchantModel.findOne({_id:m_id})    
    if(!merchant){
        return res.status(400).send({
            status:400,
            message:'Invalid merchant id'
        })
    }
    const customer = await CustomerModel.findOne({id:c_id})    
    if(!customer){
        return res.status(400).send({
            status:400,
            message:'Invalid customer id'
        })
    }
    //changing cashback to product
    let result = await buyProduct({merchant_id:m_id,product_id:p_id,customer_id:customer._id,price:price,cashback_percent:cashback_percent})
    res.status(200).send(result)
});

module.exports = router;