const mongoose = require("mongoose");

const CashbackSchema = new mongoose.Schema(
  {
    merchant_id:{
      type: Number,
      required: true,
    },
    customer_id:{
      type: Number,
      required: true,
    },
    cashback_percent:{
      type: Number,
      default:0
    },
    cashback_type:{
      type:String
    },
    cashback_level:{
      type:String,
      default:'none'
    },
    total_orders_num:{
      type: Number,
      default:0
    },
    total_orders_cost:{
      type: Number,
      default:0
    },
    total_cashback:{
      type: Number,
      default:0
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("cashback", CashbackSchema);
