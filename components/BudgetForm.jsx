import { useState } from 'react';

function BudgetForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    category: '',
    limit: '',
    month: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    // Clear field error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validate = () => {
    const validationErrors = {};

    if (!formData.category.trim()) {
      validationErrors.category = 'Category is required';
    }

    if (!formData.limit) {
      validationErrors.limit = 'Budget limit is required';
    } else if (Number(formData.limit) <= 0) {
      validationErrors.limit =
        'Budget limit must be greater than 0';
    }

    if (!formData.month) {
      validationErrors.month = 'Month is required';
    }

    return validationErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);

      await onSubmit({
        category: formData.category,
        limit: Number(formData.limit),
        month: formData.month
      });

      setFormData({
        category: '',
        limit: '',
        month: ''
      });

      setErrors({});
    } catch (error) {
      setErrors({
        submit:
          error.message ||
          'Failed to create budget'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="budget-form-container">
      <h2>Create Budget</h2>

      {errors.submit && (
        <div className="error-banner">
          {errors.submit}
        </div>
      )}

      <form
        className="budget-form"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label>Category</label>

          <input
            type="text"
            name="category"
            placeholder="Enter category"
            value={formData.category}
            onChange={handleChange}
            className={
              errors.category
                ? 'error-input'
                : ''
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
            name="limit"
            placeholder="Enter amount"
            value={formData.limit}
            onChange={handleChange}
            className={
              errors.limit
                ? 'error-input'
                : ''
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
            name="month"
            value={formData.month}
            onChange={handleChange}
            className={
              errors.month
                ? 'error-input'
                : ''
            }
          />

          {errors.month && (
            <span className="error">
              {errors.month}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
        >
          {loading
            ? 'Creating Budget...'
            : 'Create Budget'}
        </button>
      </form>
    </div>
  );
}

export default BudgetForm;