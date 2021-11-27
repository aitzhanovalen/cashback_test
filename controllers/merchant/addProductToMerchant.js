const MerchantModel = require("../../models/merchant");


module.exports = async function addProductToMerchant (m_id,product) {
    console.log('adding products to merchant with id: '+m_id)
    return MerchantModel.findByIdAndUpdate(
        m_id,
        { $push: { products : product._id } },
        { new: true, useFindAndModify: false }
      );
}