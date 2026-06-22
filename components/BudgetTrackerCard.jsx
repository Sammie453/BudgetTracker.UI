function BudgetTrackerCard({
  category,
  spent,
  limit
}) {

  const percentage =
    (spent / limit) * 100;

  return (
    <div className="budget-card">

      <div className="budget-header">
        <h3>{category}</h3>
        <span>{percentage.toFixed(0)}%</span>
      </div>

      <p>
        R{spent} of R{limit}
      </p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${percentage}%`
          }}
        />
      </div>

    </div>
  );
}

export default BudgetTrackerCard;