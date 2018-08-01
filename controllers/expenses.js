const Expense = require('../models/Expense');

exports.index = (req, res) => {
  const expenses = [];

  Expense.find({}, (err, expenseItems) => {
    if (err) throw err;

    // object of all the user
    expenseItems.forEach((expenseItem) => {
      const expense = {
        date: expenseItem.date,
        time: expenseItem.time,
        description: expenseItem.description,
        amount: expenseItem.amount,
        comment: expenseItem.comment,
      };
      expenses.push(expense);
    });
    res.render('expenses', {
      title: 'Track Expenses',
      expenseList: expenses
    });
  });
};
