import { useEffect, useState } from 'react';

import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';

import {
  getTransactions,
  createTransaction,
  deleteTransaction
} from '../services/transactionService';

function Transactions() {

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    const data = await getTransactions();
    setTransactions(data);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleAdd = async (transaction) => {
    await createTransaction(transaction);
    loadData();
  };

  const handleDelete = async (id) => {
    await deleteTransaction(id);
    loadData();
  };

  return (
    <div className="page">

      <h1>Transaction Management</h1>

      <TransactionForm onAdd={handleAdd} />

      {loading ? (
        <p>Loading transactions...</p>
      ) : (
        <TransactionList
          transactions={transactions}
          onDelete={handleDelete}
        />
      )}

    </div>
  );
}

export default Transactions;