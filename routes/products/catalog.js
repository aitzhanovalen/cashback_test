const express = require("express");
const router = express.Router();
const ProductModel = require("../../models/product");


//При входе продавца с ID, показывает все его товары.
router.get("/", async(req, res) => {
    // const m_id = req.query.id
    // console.log(m_id)
    const products = await getProducts()
    res.status(200).send({
        status:200,
        data:products
    })
});


async function getProducts(){
    const products = await ProductModel.find({}).populate("merchants",'name').lean()
    products.map(function(product, i) {
        var merged = product.prices.map(function(value, index) {
            var newValue = value;
            newValue.name = product.merchants[index].name
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