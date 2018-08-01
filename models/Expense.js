const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  date: String,
  time: String,
  description: String,
  amount: String,
  comment: String,
}, { timestamps: true });

// we need to create a model using it
const Expense = mongoose.model('Expense', expenseSchema);

// make this available to our users in our Node applications
module.exports = Expense;
