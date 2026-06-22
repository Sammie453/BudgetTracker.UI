
const validate = () => {
  const errors = {};

  if (!form.description.trim()) {
    errors.description = 'Description is required';
  }

  if (!form.amount) {
    errors.amount = 'Amount is required';
  } else if (Number(form.amount) <= 0) {
    errors.amount = 'Amount must be greater than zero';
  }

  if (!form.category.trim()) {
    errors.category = 'Category is required';
  }

  return errors;
};

import { useState } from 'react';

function TransactionForm({ onAdd }) {
  const [form, setForm] = useState({
    description: '',
    amount: '',
    category: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.description || !form.amount) return;

    onAdd({
      ...form,
      amount: Number(form.amount)
    });

    setForm({
      description: '',
      amount: '',
      category: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">

      <input
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />

      <input
        name="amount"
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={handleChange}
      />

      <input
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
      />

      <button type="submit">
        Add Transaction
      </button>

    </form>
  );
}

export default TransactionForm;

