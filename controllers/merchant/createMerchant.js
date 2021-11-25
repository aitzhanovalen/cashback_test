const MerchantModel = require("../../models/merchant");


const merchant_example = {
    name:'MAGAZIN',
}

module.exports = function createMerchant(merchant) {
    console.log('creating merchant '+merchant.name)
    return MerchantModel.create(merchant).then(doc => {
        return doc;
    });
}
