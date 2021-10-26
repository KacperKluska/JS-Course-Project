import './style.scss';
import { useState } from 'react/cjs/react.development';
import CustomLink from '../CustomLink/CustomLink';
import Sectionlogo from '../SectionLogo/SectionLogo';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const singInResponse = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const signUpData = await singInResponse.json();
      if (singInResponse.status !== 200) {
        setError(true);
        setMessage(signUpData.error);
      } else {
        setError(false);
        setMessage(signUpData.message);
      }
    } catch (err) {
      console.log('🚀 ~ file: Register.js ~ line 33 ~ registerUser ~ err', err);
    }
  };

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
              onChange={(e) => setEmail(e.target.value)}
            />
            Password
            <input
              className={`${error && 'failure'}`}
              type="password"
              placeholder="Password..."
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="submitButtons">
            <CustomLink path="/error">
              <div className="underlineLink">Forgot password ?</div>
            </CustomLink>
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
          <h3 className={`loginInfoMessage ${!error ? 'success' : 'failure'}`}>
            {message}
          </h3>
        </div>
      </section>
    </div>
  );
}
