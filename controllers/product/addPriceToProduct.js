const ProductModel = require("../../models/product");

module.exports = async function addPriceToProduct(p_id,m_id,price,cashback_percent) {
    console.log('adding price to product with id: '+p_id)
    return ProductModel.findByIdAndUpdate(
        p_id,
        { $push: { prices : 
            {
                m_id:m_id,
                price:price,
                cashback_percent:cashback_percent,
                cashback:price*cashback_percent*0.01
            }
         } },
        { new: true, useFindAndModify: false }
      );
}