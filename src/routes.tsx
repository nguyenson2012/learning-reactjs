import { lazy } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

// project imports
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// landing routing
const LandingPage = Loadable(lazy(() => import('views/landing')));

// dashboard routing
const Dashboard = Loadable(lazy(() => import('views/dashboard')));

// login routing
const AuthLogin = Loadable(lazy(() => import('views/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('views/authentication/Register')));
const AuthCheckMail = Loadable(lazy(() => import('views/authentication/CheckMail')));
const AuthResetPassword = Loadable(lazy(() => import('views/authentication/ResetPassword')));
const AuthForgotPassword = Loadable(lazy(() => import('views/authentication/ForgotPassword')));
const AuthCodeVerification = Loadable(lazy(() => import('views/authentication/CodeVerification')));

// 404 routing
const Page404 = Loadable(lazy(() => import('views/404')));

// ==============================|| ROUTING RENDER ||============================== //

const Routes = () => {
  return useRoutes([
    {
      path: 'dashboard',
      element: <Dashboard />
    },
    {
      path: '/',
      element: <MinimalLayout />,
      children: [
        {
          path: 'login',
          element: <AuthLogin />
        },
        {
          path: 'register',
          element: <AuthRegister />
        },
        {
          path: 'forgot-password',
          element: <AuthForgotPassword />
        },
        {
          path: 'check-mail',
          element: <AuthCheckMail />
        },
        {
          path: 'reset-password',
          element: <AuthResetPassword />
        },
        {
          path: 'code-verification',
          element: <AuthCodeVerification />
        },
        {
          path: '404',
          element: <Page404 />
        },
        {
          path: '',
          element: <AuthLogin />
        },
        {
          path: '*',
          element: <Navigate to="/404" replace />
        }
      ]
    }
  ]);
};

export default Routes;
