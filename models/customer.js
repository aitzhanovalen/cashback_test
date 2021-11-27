const mongoose = require("mongoose");
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

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

CustomerSchema.plugin(autoIncrement.plugin,  {
  model: 'customer',
  field: 'id',
  startAt: 1000,
  incrementBy: 1
});

module.exports = mongoose.model("customer", CustomerSchema);
