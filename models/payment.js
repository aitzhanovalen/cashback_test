const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
  {
    customer_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "customer"
    },
    status:{
        type: String    
    },
    type:{
        type: String    
    },
    amount:{
        type: Number    
    },
    card:{
        type: Object    
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("payment", PaymentSchema);
