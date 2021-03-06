import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GiChefToque } from 'react-icons/gi';
import { setMealsToken, setCocktailsToken, setUser } from '../services/localStorage';
import '../styles/Login.css';

const EMAIL_REGEX = /^[\w]+([.|\-|_][A-Za-z0-9]+)*@[a-z]{2,}(\.[a-z]{2,})+$/g;
const PASSWORD_MIN_LENGTH = 6;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const history = useHistory();
  const mealsToken = 1;
  const cocktailsToken = 1;

  useEffect(() => {
    if (email.match(EMAIL_REGEX) && password.length > PASSWORD_MIN_LENGTH) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(email);
    setMealsToken(mealsToken);
    setCocktailsToken(cocktailsToken);
    history.push('/foods');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <GiChefToque className="logo-login" />
        <div className="mb-3">
          <label htmlFor="email-input" className="form-label">
            Email
            <input
              type="email"
              id="email-input"
              className="form-control"
              data-testid="email-input"
              placeholder="email@example.com"
              value={email}
              onChange={({ target: { value } }) => setEmail(value)}
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="password-input" className="form-label">
            Senha
            <input
              type="password"
              id="password-input"
              className="form-control"
              data-testid="password-input"
              placeholder="Password"
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
            />
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          data-testid="login-submit-btn"
          disabled={isButtonDisabled}
        >
          Enter
        </button>
        <span className="madeBy">Made by Group 9 - Class 16-B</span>
      </form>
    </div>
  );
}

export default Login;
