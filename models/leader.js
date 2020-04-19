const mongoose = require("mongoose");
const Schemea = mongoose.Schema;
require("mongoose-currency").loadType(mongoose);
const Currency = mongoose.Types.Currency;

const leaderSchema = new Schemea(
  {
    name: {
      type: String,
      required: true,
    },
    discription: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    abbr: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Leaders = mongoose.model("Leader", leaderSchema);
module.exports = Leaders;
