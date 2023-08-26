import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('users/signup', credentials);
    token.set(data.token); //глобально сетимо токен на подальші запити
    return data;
  } catch (error) {
    console.error('Помилка реєстрації:', error.response.data);
    throw error;
  }
});

const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('users/logout');
    token.unset();
  } catch (error) {}
});

const refreshUser = createAsyncThunk('auth/refreshUser', async credentials => {
  try {
    const { data } = await axios.post('users/refreshUser', credentials);
    return data;
  } catch (error) {}
});

export const authOperations = {
  register,
  login,
  logout,
  refreshUser,
};
