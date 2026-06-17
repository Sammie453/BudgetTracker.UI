import SummaryCard from '../components/SummaryCard';
import BudgetCard from '../components/BudgetCard';
import TransactionTable from '../components/TransactionTable';

function Dashboard() {

  const transactions = [
    {
      id: 1,
      description: 'Groceries',
      category: 'Food',
      amount: 500
    }
  ];

  return (
    <div className="dashboard">

      <h1>Budget Tracker Dashboard</h1>

      <div className="summary-grid">
        <SummaryCard
          title="Income"
          amount={15000}
        />

        <SummaryCard
          title="Expenses"
          amount={8000}
        />

        <SummaryCard
          title="Balance"
          amount={7000}
        />
      </div>

      <div className="budget-grid">
        <BudgetCard
          category="Food"
          spent={4000}
          limit={5000}
        />

        <BudgetCard
          category="Transport"
          spent={1500}
          limit={3000}
        />
      </div>

      <TransactionTable
        transactions={transactions}
      />

    </div>
  );
}

export default Dashboard;