import React, { useState } from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuthentificator';
import ReactHookForm from './Form';

const Login = () => {
  const { isAuthenticated, login, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent form submission

    const emailValid = validateEmail(email);
    if (emailValid) {
      login(email, password);
      navigate(location.state.pathname);
    } else {
      setEmailError('Por favor, introduzca su email.');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(null); // Clear any previous error
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <h1>Login Page</h1>
      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <div>
          <form onSubmit={handleLogin}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {emailError && <span className="error">{emailError}</span>}
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
          <button type="submit">Login</button>
        </form>
          <button onClick={() => setShowRegisterModal(true)}>Registrarse</button>
          {showRegisterModal && <ReactHookForm onClose={() => setShowRegisterModal(false)} />}
        </div>
      )}
    </div>
  );
};

export default Login;
