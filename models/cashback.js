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
        required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("cashback", CashbackSchema);
