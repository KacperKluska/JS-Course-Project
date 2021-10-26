import './style.scss';
import { useState } from 'react/cjs/react.development';
import CustomLink from '../CustomLink/CustomLink';
import Sectionlogo from '../SectionLogo/SectionLogo';

export default function Register() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const singUpResponse = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          surname,
          email,
          password,
        }),
      });
      const signUpData = await singUpResponse.json();
      if (singUpResponse.status !== 200) {
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
      <Sectionlogo>Sign up!</Sectionlogo>
      <section className="login">
        <form className="loginForm" onSubmit={registerUser}>
          <header>
            <h1>Register</h1>
          </header>
          <div className="inputs">
            Name
            <input
              type="text"
              placeholder="Name..."
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            Surname
            <input
              type="text"
              placeholder="Surname..."
              required
              value={surname}
              onChange={(e) => {
                setSurname(e.target.value);
              }}
            />
            Email
            <input
              type="email"
              placeholder="Email..."
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            Password
            <input
              type="password"
              placeholder="Password..."
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            Password
            <input
              type="password"
              placeholder="Repeat password..."
              required
              value={password2}
              onChange={(e) => {
                setPassword2(e.target.value);
              }}
            />
          </div>
          <div className="submitButtons">
            <div>
              Have an account ?
              <CustomLink path="/login">
                <div className="underlineLink">Sign in !</div>
              </CustomLink>
            </div>
            <button className="loginSubmitButton" type="submit">
              Register
            </button>
          </div>
        </form>
        <div className="loginInfo">
          <h1>
            <b>Sign up rules</b>
          </h1>
          <ul className="loginInfoList">
            <li>Name you provide will be displayed on page and in comments</li>
            <li>
              Password must contain from 8 to 20 characters, 1 capital letter
              and 1 number
            </li>
          </ul>
          <h3 className={`loginInfoMessage ${!error ? 'success' : 'failure'}`}>
            {message}
          </h3>
        </div>
      </section>
    </div>
  );
}
