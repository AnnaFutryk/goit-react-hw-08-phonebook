import { authOperations } from './auth-operations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshingUser: false, //вказує, чи відбувається наразі процес оновлення даних користувача; блокує певні дії,коли дані користувача оновлюються
  userRefreshed: false, //вказує, чи вже було оновлено дані користувача в поточному сеансі (незалежно від стану isRefreshingUser). Дозволяє виконувати певні дії тільки один раз, коли дані користувача було оновлено, запобігає повторюваним оновленням
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.refreshUser.pending](state) {
      state.isRefreshingUser = true;
    },
    [authOperations.refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshingUser = false;
      state.userRefreshed = true;
    },
    [authOperations.refreshUser.rejected](state) {
      state.isRefreshingUser = false;
      state.userRefreshed = true;
    },
  },
});

export default authSlice.reducer;
