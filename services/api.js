import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api'
});

export const getDashboardData = async () => {
  const response = await API.get('/dashboard');
  return response.data;
};

export const getTransactions = async () => {
  const response = await API.get('/transactions');
  return response.data;
};

export const getBudgets = async () => {
  const response = await API.get('/budgets');
  return response.data;
};