const ProductModel = require("../../models/product");

module.exports = async function changeCashback(p_id,m_id,cashback_percent) {
    console.log('changing cashback of product with id: '+p_id)
    let k = await ProductModel.findOne({_id:p_id,"prices.m_id": m_id })
    console.log(k,6)
    await ProductModel.updateOne(
        { _id: p_id, "prices.m_id": m_id },
        { $set: { "prices.$.cashback_percent" : cashback_percent, "prices.$.cashback":"prices.$.price"*cashback_percent*0.01 } } 
    )
    // return ProductModel.findByIdAndUpdate(
    //     p_id,
    //     { $push: { prices : 
    //         {
    //             m_id:m_id,
    //             price:price,
    //             cashback_percent:cashback_percent,
    //             cashback:price*cashback_percent*0.01
    //         }
    //      } },
    //     { new: true, useFindAndModify: false }
    //   );
}