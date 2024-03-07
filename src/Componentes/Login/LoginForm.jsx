import React from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';

import "../Login/LoginForm.css"
import { useAuth } from '../../hooks/useAuthentificator';

const Login = () => {
  const { isAuthenticated, login, logout } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    login();
    navigate(location.state.pathname)
  };

  return (
    <div>
      <h1>Login Page</h1>
      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default Login;
