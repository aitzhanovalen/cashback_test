const createProduct = require('./createProduct')
const addMerchantToProduct = require('./addMerchantToProduct')
const addPriceToProduct = require('./addPriceToProduct')
const changeCashback = require('./changeCashback')
const buyProduct = require('./buyProduct')



module.exports = {
    createProduct:createProduct,
    addMerchantToProduct:addMerchantToProduct,
    addPriceToProduct:addPriceToProduct,
    changeCashback:changeCashback,
    buyProduct:buyProduct
}