function TransactionTable({
  transactions
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(tx => (
          <tr key={tx.id}>
            <td>{tx.description}</td>
            <td>{tx.category}</td>
            <td>R {tx.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;