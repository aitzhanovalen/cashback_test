const mongoose = require("mongoose");
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

const OrderSchema = new mongoose.Schema(
  {
    id:{
      type: Number,
      unique:true
    },
    merchant_id:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "merchant"
    },
    product_id:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "product"
    },
    customer_id:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "customer"
    },
    sku:{
      type: String,
    },
    title:{
      type: String,
    },
    price:{
      type:Number
    },
    cashback:{
      type:Number
    },
    cashback_percent:{
      type:Object
    },
    card_type:{
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

OrderSchema.plugin(autoIncrement.plugin,  {
  model: 'order',
  field: 'id',
  startAt: 1000000,
  incrementBy: 1
});

module.exports = mongoose.model("order", OrderSchema);
