const express = require("express");
const router = express.Router();
const MerchantModel = require("../../models/merchant");


//При входе продавца с ID, показывает все его товары.
router.get("/", async(req, res) => {
    const m_id = req.query.id
    console.log(m_id)
    const products = await getProductsOfMerchant(m_id)
    if(!products){
        return res.status(400).send({
            status:400,
            data:'Invalid m_id'
        })
    }
    res.status(200).send({
        status:200,
        data:products
    })
});


async function getProductsOfMerchant(id){
    const m = await MerchantModel.findOne({id:id}).populate("products");
    if(!m){
        return 
    }
    return m.products
}

module.exports = router;