import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getTransactions = async () => {

  try {
    const response = await axios.get(
      `${API_URL}/transactions`
    );

    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
      'Failed to load transactions'
    );
  }

  const res = await axios.get(`${API_URL}/transactions`);
  return res.data;
};

export const createTransaction = async (data) => {
  const res = await axios.post(`${API_URL}/transactions`, data);
  return res.data;
};

export const deleteTransaction = async (id) => {
  const res = await axios.delete(`${API_URL}/transactions/${id}`);
  return res.data;

};