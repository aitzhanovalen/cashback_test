const ProductModel = require("../../models/product");
const OrderModel = require("../../models/order")
const MerchantModel = require("../../models/merchant")
const CashbackModel = require("../../models/cashback");
const CustomerModel = require("../../models/customer");
const {addCashbackToCustomer} = require("../../controllers/merchant")
const mongoose =require('mongoose')

module.exports = async function buyProduct(obj) {
//obj:
//{
//     "m_id":"619f09f3fd8b8506501bb1b1",
//     "c_id":1000,
//     "p_id":"619f09f4fd8b8506501bb1b3",
//     "price":579050,
//     "cashback_percent":10,
//     "card_type":"halyk"
// }
    console.log('creating order')

    //preparing for creating order
    const product = await ProductModel.findOne({_id:mongoose.Types.ObjectId(obj.p_id)})
    const cashback = await CashbackModel.findOne({customer_id:obj.c_id})
    const merchant = await MerchantModel.findOne({_id:obj.m_id})
    const customer = await CustomerModel.findOne({id:obj.c_id})

    const order = obj
    order.sku = product.sku
    order.title = product.title
    order.merchant_id = merchant._id
    order.product_id = obj.p_id
    order.customer_id = customer._id
    order.cashback = parseFloat((obj.cashback_percent*0.01*obj.price).toFixed(2));


    //check if cashback exists 
    if(cashback){
        console.log(cashback,30)
        //check orders of customer to define do we have to create cashback 
        if(merchant && merchant.cashback_type && merchant.cashback_type==='sum'){           
            if(merchant.cashback_percents.low.range[0]<=obj.price<=merchant.cashback_percents.low.range[1]){
                cashback.cashback_percent = merchant.cashback_percents.low.cashback
                cashback.cashback_level = 'low'
            }else if(merchant.cashback_percents.medium.range[0]<=obj.price<=merchant.cashback_percents.medium.range[1]){
                cashback.cashback_percent = merchant.cashback_percents.medium.cashback
                cashback.cashback_level = 'medium'
            }else if(merchant.cashback_percents.high.range[0]<=obj.price){
                cashback.cashback_percent = merchant.cashback_percents.high.cashback
                cashback.cashback_level = 'high'
            }
        }
        else if(merchant && merchant.cashback_type && merchant.cashback_type==='count'){
            if(merchant.cashback_percents.low.range[0]<=parseInt(cashback.total_orders_num)+1 &&
            parseInt(cashback.total_orders_num)+1<merchant.cashback_percents.low.range[1]){

                console.log('low')
                cashback.cashback_percent = merchant.cashback_percents.low.cashback
                cashback.cashback_level = 'low'
            }else if(merchant.cashback_percents.medium.range[0]<=parseInt(cashback.total_orders_num)+1 &&
            parseInt(cashback.total_orders_num)+1<merchant.cashback_percents.medium.range[1]){

                console.log('medium')                
                cashback.cashback_percent = merchant.cashback_percents.medium.cashback
                cashback.cashback_level = 'medium'
            }else if(merchant.cashback_percents.high.range[0]<=parseInt(cashback.total_orders_num)+1){
                cashback.cashback_percent = merchant.cashback_percents.high.cashback
                cashback.cashback_level = 'high'
            }
        }
        cashback.total_orders_num +=1 
        cashback.total_orders_cost += obj.price
        cashback.total_cashback += parseFloat((obj.cashback_percent*0.01*obj.price).toFixed(2))
        await cashback.save()
    }else{
        let cashback_percent = obj.cashback_percent
        let cashback_level

        if(merchant && merchant.cashback_type && merchant.cashback_type==='sum'){
            if(merchant.cashback_percents.low.range[0]<=obj.price<merchant.cashback_percents.low.range[1]){
                cashback_percent = merchant.cashback_percents.low.cashback
                cashback_level = 'low'
            }else if(merchant.cashback_percents.medium.range[0]<=obj.price<merchant.cashback_percents.medium.range[1]){
                cashback_percent = merchant.cashback_percents.medium.cashback
                cashback_level = 'medium'
            }else if(merchant.cashback_percents.high.range[0]<=obj.price){
                cashback_percent = merchant.cashback_percents.high.cashback
                cashback_level = 'high'
            }
        }
        else if(merchant && merchant.cashback_type && merchant.cashback_type==='count'){
            if(merchant.cashback_percents.low.range[0]<=1){
                cashback_percent = merchant.cashback_percents.low.cashback
                cashback_level = 'low'
            }
        }
        await addCashbackToCustomer({
            merchant_id:merchant.id,
            customer_id:obj.c_id,
            cashback_type:merchant.cashback_type?merchant.cashback_type:null,
            total_orders_num:1,
            total_orders_cost: obj.price,
            total_cashback: parseFloat((obj.cashback_percent*0.01*obj.price).toFixed(2)),
            cashback_percent:cashback_percent,
            cashback_level:cashback_level
        })

    }
    
    // return order with old cashback if it changed or did't
    return OrderModel.create(order).then(doc => {
        return doc;
    });
}