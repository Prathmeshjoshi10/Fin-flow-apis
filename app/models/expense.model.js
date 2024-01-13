const { text } = require("body-parser");
const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    value: {
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
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
expenseSchema.index({ title: "text", title: "text" });
const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
