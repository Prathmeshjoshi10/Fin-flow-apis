// const Note = require("../models/note.model");
const Expense = require("../models/expense.model");

exports.create = async (req, res) => {
  try {
    /* if (!req.body.expenseTitle || !req.body.value) {
      res.status(400).send({ message: "Title and Content can not be empty!" });
      return;
    } */
    const expense = new Expense(req.body);
    const newExpense = await expense.save();
    res.status(201).send(newExpense);
  } catch (error) {
    res.status(400).send({
      error: error.message,
    });
    console.log("Error:::", error);
  }
};

exports.delete = async (req, res) => {
  try {

    const id = req.params.id;

    const deleted = await Note.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).json({ success: true, message: "Note deleted." });
    } else {
      return res
        .status(500)
        .json({ success: false, message: "Deletion failed" });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.edit = async (req, res) => {
  try {
    const id = req.params.id;

    const updated = await Note.findByIdAndUpdate(id, req.body);
    if (updated) {
      return res
        .status(200)
        .json({ success: true, message: "Note updated", note: updated });
    } else {
      return res
        .status(500)
        .json({ success: false, message: "Updation failed" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const userId = req.params.userId;
    const notes = await Note.find({ userId: userId });
    res.status(200).json({ success: true, notes: notes });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.search = async (req, res) => {
  try {
    const searchText = req.params.searchText;
    const userId = req.params.userId;

    const result = await Note.find({
      $and: [{ $text: { $search: searchText } }, { userId: userId }],
    });

    res.status(200).json({ success: true, result: result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
