const mongoose = require("mongoose");
const Schemea = mongoose.Schema;
require("mongoose-currency").loadType(mongoose);
const Currency = mongoose.Types.Currency;

const promoSchema = new Schemea(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
    price: {
      type: Currency,
      required: true,
      min: 0,
    },
    discription: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Promos = mongoose.model("Promo", promoSchema);
module.exports = Promos;
