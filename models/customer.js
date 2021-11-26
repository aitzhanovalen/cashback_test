const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema(
  {
    name:{
        type: String,
        required: true,
    },
    surname:{
        type: String,
        required: true,
    },
    iin:{
        type: String,
        required: true,
    },
    cart_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "cart"
    },
    orders:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "order"
      }
    ],
    address:{
      type:Object
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("customer", CustomerSchema);
