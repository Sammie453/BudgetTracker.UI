const validate = () => {
  const errors = {};

  if (!form.description.trim()) {
    errors.description = 'Description is required';
  }

  if (!form.amount) {
    errors.amount = 'Amount is required';
  } else if (Number(form.amount) <= 0) {
    errors.amount = 'Amount must be greater than zero';
  }

  if (!form.category.trim()) {
    errors.category = 'Category is required';
  }

  return errors;
};