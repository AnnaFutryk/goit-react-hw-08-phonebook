import { lazy } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { authOperations } from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import { AppBar } from './AppBar/AppBar';
import Layout from './Layout/Layout';
import Loader from './Loader/Loader';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();

  const isRefreshingUser = useSelector(authSelectors.getIsRefreshingUser);

  const userRefreshed = useSelector(authSelectors.getUserRefreshed);

  useEffect(() => {
    // Виконуйте оновлення користувача лише раз, якщо він ще не був оновлений
    if (!userRefreshed) {
      dispatch(authOperations.refreshUser());
    }
  }, [dispatch, userRefreshed]);

  return !isRefreshingUser ? (
    <>
      <AppBar />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={
              <RestrictedRoute redirectTo="/contacts">
                <RegisterPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/contacts">
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login">
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  ) : (
    <Loader />
  );
};
