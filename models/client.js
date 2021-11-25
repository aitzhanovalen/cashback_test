const mongoose = require("mongoose");

const MerchantSchema = new mongoose.Schema(
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
    cart:[
        {
            type: Object
        }
    ],
    orders:[
        {
          type: Object
        }
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("merchant", MerchantSchema);
