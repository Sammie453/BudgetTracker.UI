function RecentTransactions() {
  const transactions = [
    {
      id: 1,
      description: 'Groceries',
      amount: 450
    },
    {
      id: 2,
      description: 'Fuel',
      amount: 600
    }
  ];

  return (
    <div className="transactions">
      <h2>Recent Transactions</h2>

      {transactions.map(transaction => (
        <div
          key={transaction.id}
          className="transaction-item"
        >
          <span>
            {transaction.description}
          </span>

          <span>
            R {transaction.amount}
          </span>
        </div>
      ))}
    </div>
  );
}

export default RecentTransactions;