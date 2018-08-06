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
    req.flash('success', { msg: 'Expense information has been added.' });
    res.redirect('/expenses');
  });
};

exports.edit = (req, res) => {
  Expense.findById(req.query.id, (err, expense) => {
    if (err) throw err;

    res.render('expenses/edit', {
      title: 'Edit Expense',
      id: expense.id,
      date: expense.date,
      time: expense.time,
      description: expense.description,
      amount: expense.amount,
      comment: expense.comment
    });
  });
};

exports.editExpense = (req, res, next) => {
  Expense.findById(req.body.id, (err, expense) => {
    if (err) { return next(err); }
    console.log(expense);
    expense.date = req.body.date || '';
    expense.time = req.body.time || '';
    expense.description = req.body.description || '';
    expense.amount = req.body.amount || '';
    expense.comment = req.body.comment || '';

    expense.save((err) => {
      if (err) return next(err);

      req.flash('success', { msg: 'Expense information has been updated.' });
      res.redirect('/expenses');
    });
  });
};

exports.remove = (req, res) => {
  Expense.remove({ _id: req.query.id }, (err) => {
    if (err) throw err;
    res.redirect('/expenses');
  });
};
