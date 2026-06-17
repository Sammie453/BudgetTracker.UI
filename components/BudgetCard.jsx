function BudgetCard({
  category,
  spent,
  limit
}) {
  const percentage =
    (spent / limit) * 100;

  return (
    <div className="budget-card">
      <h3>{category}</h3>

      <p>
        R{spent} / R{limit}
      </p>

      <div className="progress">
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

export default BudgetCard;