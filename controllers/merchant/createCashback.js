const CashbackModel = require("../../models/cashback");

module.exports = async function createCashback (obj) {
    console.log('creating cashback')
    return CashbackModel.create(obj,function(error, result){
        if (!error) {
            return {
                status:'fail',
                message:error
            }
        }
        if(result){
            return {
                status:'success',
                message:'Cashback created'
            }
        }
    });
}