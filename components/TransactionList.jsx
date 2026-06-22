import TransactionItem from './TransactionItem';

function TransactionList({ transactions, onDelete }) {
  return (
    <div className="list-container">

      {transactions.length === 0 && (
        <p>No transactions found</p>
      )}

      {transactions.map((t) => (
        <TransactionItem
          key={t._id}
          transaction={t}
          onDelete={onDelete}
        />
      ))}

    </div>
  );
}

export default TransactionList;