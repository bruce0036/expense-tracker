exports.index = (req, res) => {
  const expenses = [];

  const expense = {
    date: '2018/2/18',
    time: '09:00',
    description: 'This is a test value',
    amount: '100$',
    comment: 'This is a test comment',
  };
  expenses.push(expense);

  res.render('expenses', {
    title: 'Track Expenses',
    expenseList: expenses
  });
};
