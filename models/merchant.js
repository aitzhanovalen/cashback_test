const mongoose = require("mongoose");
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

const MerchantSchema = new mongoose.Schema(
  {
    id:{
      type: Number,
      unique:true
    },
    name:{
      type: String,
      required: true,
    },
    products:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
      }
    ],
    cashback_type:{
      type: String,
    },
    cashback_percents:{
      type: Object
    },
    bank_percent:{
      type: Number,
    },
    payment_system_percent:{
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

MerchantSchema.plugin(autoIncrement.plugin,  {
  model: 'merchant',
  field: 'id',
  startAt: 1000000,
  incrementBy: 1
});

module.exports = mongoose.model("merchant", MerchantSchema);
