const CustomerModel = require("../../models/customer");

module.exports = async function createCustomer (obj) {
    console.log('creating customer: ')
    return CustomerModel.create(obj);
}