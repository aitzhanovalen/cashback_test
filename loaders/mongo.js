const mongoose = require('mongoose');
require("../models/product");
require("../models/merchant")
const Config = require('../config');

console.log('DB: trying to connect to', Config.db)

module.exports = async ()=> {
    await mongoose
        .connect(Config.db,{ useNewUrlParser: true })
        .then(() => console.log('Connected to database'))
        .catch(console.log)
}