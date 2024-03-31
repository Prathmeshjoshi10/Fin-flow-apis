const { text } = require("body-parser");
const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema(
  {
    incomeTitle: {
      type: String,
      required: true,
      trim: true,
    },
    incomeValue: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
    },
    userId: {
      type: String,
      required: true
    }
    
  },
  {
    timestamps: true,
  }
);
incomeSchema.index({ incomeTitle: "text", incomeTitle: "text" });
const Income = mongoose.model("Income", incomeSchema);

module.exports = Income;
