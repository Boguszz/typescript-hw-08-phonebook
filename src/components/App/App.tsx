import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import useRefreshCurrentUser from 'hooks/useRefreshCurrentUser';
import AppBar from 'components/AppBar';
import NotFound from 'components/NotFound';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import Loader from 'components/Loader';
import Footer from 'components/Footer';

const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const AddContactPage = lazy(() => import('pages/AddContactPage'));
const ChangeContactPage = lazy(() => import('pages/ChangeContactPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));

const App: React.FC = () => {
  const { isRefreshing } = useRefreshCurrentUser();

  return !isRefreshing ? (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts/*"
            element={
              <PrivateRoute redirectTo="/contacts">
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/contacts/add"
            element={
              <PublicRoute>
                <AddContactPage />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts/edit/:contactId"
            element={
              <PublicRoute>
                <ChangeContactPage />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="*"
            element={
              <PublicRoute>
                <NotFound />
              </PublicRoute>
            }
          />
        </Routes>
      </Suspense>
      <Footer />
    </>
  ) : null;
};

export default App;
