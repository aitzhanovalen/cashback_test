const ProductModel = require("../../models/product");
const OrderModel = require("../../models/order")
const mongoose =require('mongoose')

module.exports = async function buyProduct(obj) {
    console.log('creating order')
    
    const product = await ProductModel.findOne({_id:mongoose.Types.ObjectId(obj.product_id)})
    const order = obj
    order.sku = product.sku
    order.title = product.title
    order.cashback = obj.cashback_percent*0.01*obj.price

    return OrderModel.create(order).then(doc => {
        return doc;
    });
}