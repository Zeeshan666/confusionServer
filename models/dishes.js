const mongoose = require("mongoose");
const Schemea = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const commentSchema = new Schemea(
  {
    rating: {
      type: Number,
      max: 5,
      min: 1,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const dishScheme = new Schemea(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    discription: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true
  },
  category: {
      type: String,
      required: true
  },
  label: {
      type: String,
      default: ''
  },
  price: {
      type: Currency,
      required: true,
      min: 0
  },
  featured: {
      type: Boolean,
      default:false      
  },
    comments:[commentSchema]
  },
  {
    //add created and updatedTime
    timestamps: true,
  }
);
var Dishes = mongoose.model("Dish", dishScheme);
module.exports = Dishes;
