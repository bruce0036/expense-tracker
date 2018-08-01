const Expense = require('../models/Expense');

exports.index = (req, res) => {
  const expenses = [];

  Expense.find({}, (err, expenseItems) => {
    if (err) throw err;

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
    res.render('expenses/view', {
      title: 'Track Expenses',
      expenseList: expenses
    });
  });
};

exports.add = (req, res) => {
  res.render('expenses/add', {
    title: 'Add Expense'
  });
};

exports.addExpense = (req, res, next) => {
  const expense = new Expense({
    date: req.body.date,
    time: req.body.time,
    description: req.body.description,
    amount: req.body.amount,
    comment: req.body.comment,
  });

  expense.save((err) => {
    if (err) { return next(err); }
    res.redirect('/expenses');
  });
};
