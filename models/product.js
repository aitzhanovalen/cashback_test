const mongoose = require("mongoose");
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

const ProductSchema = new mongoose.Schema(
  {
    id:{
      type:Number,
      unique:true
    },
    sku:{
      type: String,
      required: true,
    },
    title:{
      type: String,
      required: true,
    },
    description:{
      type: String,
      required: true
    },
    category:{
      type: String,
      required: true
    },
    imgs:{
      type: Array
    },
    merchants:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "merchant"
      }
    ],
    prices:[
      {
        type: Object,
      },
    ]
  },
  {
    timestamps: true,
  }
);

ProductSchema.plugin(autoIncrement.plugin,  {
  model: 'product',
  field: 'id',
  startAt: 1000000,
  incrementBy: 1
});


module.exports = mongoose.model("product", ProductSchema);
