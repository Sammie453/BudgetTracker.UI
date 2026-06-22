import SummaryCard from '../components/SummaryCard';
import BudgetCard from '../components/BudgetCard';
import RecentTransactions from '../components/RecentTransactions';
import NotificationPanel from '../components/NotificationPanel';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Budget Tracker Dashboard</h1>

      <div className="summary-grid">
        <SummaryCard title="Income" amount={15000} />
        <SummaryCard title="Expenses" amount={8500} />
        <SummaryCard title="Balance" amount={6500} />
      </div>

      <div className="dashboard-content">
        <BudgetCard
          category="Food"
          spent={4000}
          limit={5000}
        />

        <BudgetCard
          category="Transport"
          spent={1800}
          limit={3000}
        />
      </div>

      <RecentTransactions />

      <NotificationPanel />
    </div>
  );
}

export default Dashboard;