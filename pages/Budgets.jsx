import BudgetForm from '../components/BudgetForm';
import BudgetTrackerCard from '../components/BudgetTrackerCard';

import '../styles/budget.css';

function Budgets() {
  return (
    <div className="budget-page">

      <BudgetForm />

      <div className="budget-grid">

        <BudgetTrackerCard
          category="Food"
          spent={3500}
          limit={5000}
        />

        <BudgetTrackerCard
          category="Transport"
          spent={1800}
          limit={3000}
        />

        <BudgetTrackerCard
          category="Entertainment"
          spent={1200}
          limit={2000}
        />

      </div>

    </div>
  );
}

export default Budgets;