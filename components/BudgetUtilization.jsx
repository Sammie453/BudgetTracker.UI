function BudgetUtilization({
  totalBudget,
  totalExpenses
}) {

  const percentage =
    (totalExpenses / totalBudget) * 100;

  return (
    <div className="budget-utilization">

      <h3>Budget Utilization</h3>

      <div className="progress">
        <div
          className="progress-fill"
          style={{
            width: `${percentage}%`
          }}
        />
      </div>

      <p>
        {percentage.toFixed(1)}%
      </p>

    </div>
  );
}

export default BudgetUtilization;