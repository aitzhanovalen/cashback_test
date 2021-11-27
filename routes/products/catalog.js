const express = require("express");
const router = express.Router();
const ProductModel = require("../../models/product");
const CashbackModel = require("../../models/cashback");
const MerchantModel = require("../../models/merchant");


//При входе покупателя с ID, показывает все товары с личными кэшбеками
router.get("/", async(req, res) => {
    const c_id = req.query.c_id
    const products = await getProducts(c_id)
    res.status(200).send({
        status:200,
        data:products
    })
});


async function getProducts(c_id){
    const products = await ProductModel.find({}).populate("merchants",'name').lean()
    const cashback = await CashbackModel.findOne({customer_id:c_id})
    let merchant
    if(cashback){
        merchant = await MerchantModel.findOne({id:cashback.merchant_id})
    }
    
    products.map(function(product, i) {
        var merged = product.prices.map(function(value, index) {
            var newValue = value;
            if(merchant && merchant._id.equals(product.merchants[index]._id)){
                newValue.cashback_percent = cashback.cashback_percent
                newValue.cashback = newValue.price*cashback.cashback_percent*0.01
            }
            
            newValue.merchant_name = product.merchants[index].name
            return newValue;
          }); 
    
        delete product.createdAt
        delete product.updatedAt
        delete product.merchants
        delete product.prices
        delete product.__v
        product.merchants = merged
    })

    return products
}

module.exports = router;