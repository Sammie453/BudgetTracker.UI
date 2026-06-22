function BudgetForm() {
  return (
    <div className="budget-form-container">
      <h2>Create Budget</h2>

      <form className="budget-form">

        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            placeholder="Enter category"
          />
        </div>

        <div className="form-group">
          <label>Budget Limit</label>
          <input
            type="number"
            placeholder="Enter amount"
          />
        </div>

        <div className="form-group">
          <label>Month</label>
          <input type="month" />
        </div>

        <button type="submit">
          Create Budget
        </button>

      </form>
    </div>
  );
}

export default BudgetForm;