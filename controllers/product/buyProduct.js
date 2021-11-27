const ProductModel = require("../../models/product");
const OrderModel = require("../../models/order")

module.exports = async function buyProduct(obj) {
    console.log('creating order ')
    const product = await ProductModel.find({_id:obj.p_id})
    const order = obj
    order.sku = product.sku
    order.title = product.title
    order.cashback = obj.cashback_percent*0.01*obj.price

    return OrderModel.create(order).then(doc => {
        return doc;
    });
}