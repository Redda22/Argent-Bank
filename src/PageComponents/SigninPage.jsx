import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { login } from '../redux/slices/connSlice';

function SigninPage() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const token = useSelector(state => state.auth.token);
  const error = useSelector(state => state.auth.error);
  const navigate = useNavigate();

  const [username, setUsername] = useState('tony@stark.com');
  const [password, setPassword] = useState('password123');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    setLoading(true);
    try {
      await dispatch(login({ email: username, password: password }));
    } catch (error) {
      console.error('Error during login:', error);
    } finally {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    navigate('/user');
  }

  return (
    <div className="SigninPage">
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="button" className="sign-in-button" onClick={handleLogin} disabled={loading}>
              {loading ? 'Loading...' : 'Sign In'}
            </button>
            {error && <h1 style={{ color: "red" }}>{error}</h1>}
          </form>
        </section>
      </main>
    </div>
  );
}

export default SigninPage;
