const ProductModel = require("../../models/product");

module.exports = async function addMerchantToProduct (p_id,merchant) {
    console.log('adding merchant to product with id: '+p_id)
    return ProductModel.findByIdAndUpdate(
        p_id,
        { $push: { merchants : merchant._id } },
        { new: true, useFindAndModify: false }
      );
}