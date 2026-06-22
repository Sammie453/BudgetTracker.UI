function BudgetCard({ category, spent = 0, limit = 0 }) {
  const percentage =
    limit > 0 ? (spent / limit) * 100 : 0;

  const isOverBudget = percentage > 100;

  return (
    <div className="budget-card">

      <h3>{category}</h3>

      <p>
        R{spent} / R{limit}
      </p>

      <div className="progress">
        <div
          className={`progress-fill ${
            isOverBudget ? 'danger' : ''
          }`}
          style={{
            width: `${Math.min(percentage, 100)}%`
          }}
        />
      </div>

      <p>
        {limit > 0
          ? `${percentage.toFixed(0)}%`
          : 'No limit set'}
      </p>

    </div>
  );
}

export default BudgetCard;