const mongoose = require("mongoose");
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

const OrderSchema = new mongoose.Schema(
  {
    id:{
      type: Number,
      unique:true
    },
    customer_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "customer"
    },
    payment_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"payment"
    },
    payment_status:{
        type:String,
        default:'not_paid'
    },
    shipping:{
        type: Object    
    },
    totalCost:{
        type:Number
    },
    products:[{
        type: Object    
    }],
    
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
