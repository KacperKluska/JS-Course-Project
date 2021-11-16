import './style.scss';
import { useHistory } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { useContext } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import Sectionlogo from '../SectionLogo/SectionLogo';
import { UserContext } from '../../context/UserContext';
import login from '../../services/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const history = useHistory();
  const { isLogged } = useContext(UserContext);
  const [, setUserLogged] = isLogged;

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const { data, status } = await login(email, password);
      if (status !== 200) {
        setError(true);
        setMessage(data.error);
      } else {
        setError(false);
        setMessage(data.message);
        history.replace({ pathname: '/' });
        setUserLogged(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <div className="emptyScreen">
      <Sectionlogo>Sign in!</Sectionlogo>
      <section className="login">
        <form className="loginForm" onSubmit={signIn}>
          <header>
            <h1>Sign in</h1>
          </header>
          <div className="loginInputs">
            Email
            <input
              className={`${error && 'failure'}`}
              type="email"
              placeholder="Email..."
              required
              value={email}
              onChange={handleEmailChange}
            />
            Password
            <input
              className={`${error && 'failure'}`}
              type="password"
              placeholder="Password..."
              required
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="submitButtons">
            <CustomLink path="/error">
              <div className="underlineLink">Forgot password ?</div>
            </CustomLink>
            <h3
              className={`loginInfoMessage ${!error ? 'success' : 'failure'}`}
            >
              {message}
            </h3>
            <button className="loginSubmitButton" type="submit">
              Login
            </button>
          </div>
        </form>
        <div className="loginInfo">
          <h1>
            <b>Register now for more!</b>
          </h1>
          <ul className="loginInfoList">
            <li>Watch your package status</li>
            <li>Shopping history</li>
            <li>Possibility of getting discount</li>
            <li>Autocomplete form</li>
          </ul>
          <CustomLink path="/register">
            <button type="button" className="loginInfoButton">
              Sign up
            </button>
          </CustomLink>
        </div>
      </section>
    </div>
  );
}
