const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    customer_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "customer"
    },
    status:{
        type: String    
    },
    quantity:{
        type: Number    
    },
    total:{
        type: Number    
    },
    products:[{
        type: Object    
    }],
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("cart", CartSchema);
