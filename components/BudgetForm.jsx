import { useState } from 'react';

function BudgetForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    category: '',
    limit: '',
    month: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.category.trim()) {
      newErrors.category = 'Category is required';
    }

    if (!formData.limit) {
      newErrors.limit = 'Budget limit is required';
    } else if (Number(formData.limit) <= 0) {
      newErrors.limit = 'Budget limit must be greater than 0';
    }

    if (!formData.month) {
      newErrors.month = 'Month is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    onSubmit(formData);
  };

  return (
    <form className="budget-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Category</label>
        <input
          type="text"
          value={formData.category}
          onChange={(e) =>
            setFormData({
              ...formData,
              category: e.target.value
            })
          }
        />
        {errors.category && (
          <span className="error">
            {errors.category}
          </span>
        )}
      </div>

      <div className="form-group">
        <label>Budget Limit</label>
        <input
          type="number"
          value={formData.limit}
          onChange={(e) =>
            setFormData({
              ...formData,
              limit: e.target.value
            })
          }
        />
        {errors.limit && (
          <span className="error">
            {errors.limit}
          </span>
        )}
      </div>

      <div className="form-group">
        <label>Month</label>
        <input
          type="month"
          value={formData.month}
          onChange={(e) =>
            setFormData({
              ...formData,
              month: e.target.value
            })
          }
        />
        {errors.month && (
          <span className="error">
            {errors.month}
          </span>
        )}
      </div>

      <button type="submit">
        Create Budget
      </button>
    </form>
  );
}

export default BudgetForm;