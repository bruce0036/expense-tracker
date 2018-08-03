const Expense = require('../models/Expense');

exports.index = (req, res) => {
  Expense.find({}, (err, expenseItems) => {
    if (err) throw err;

    res.render('expenses/view', {
      title: 'Track Expenses',
      expenseList: expenseItems
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

exports.edit = (req, res) => {
  res.render('expenses/edit', {
    title: 'Edit Expense',
    date: '2018/01/01',
    time: '12:00',
    description: 'test',
    amount: '100',
    comment: 'test comment'
  });
};
