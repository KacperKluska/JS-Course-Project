import './style.scss';
import { useState } from 'react/cjs/react.development';
import CustomLink from '../CustomLink/CustomLink';
import Sectionlogo from '../SectionLogo/SectionLogo';
import RegisterInputs from './RegisterInputs';
import validate from './validate';

export default function Register() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [message, setMessage] = useState('');
  const [fetchError, setFetchError] = useState(false);
  const [validateError, setValidateError] = useState(false);

  const registerUser = async (e) => {
    e.preventDefault();
    const result = validate(setMessage, password, password2, name, surname);
    setValidateError(!result);

    if (result) {
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
          setFetchError(true);
          setMessage(signUpData.error);
        } else {
          setFetchError(false);
          setMessage(signUpData.message);
          setName('');
          setSurname('');
          setEmail('');
          setPassword('');
          setPassword2('');
        }
      } catch (err) {
        // console.log(err);
      }
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
          <RegisterInputs
            name={name}
            setName={setName}
            surname={surname}
            setSurname={setSurname}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            password2={password2}
            setPassword2={setPassword2}
            error={validateError}
          />
          <div className="submitButtons">
            <div>
              Have an account ?
              <CustomLink path="/login">
                <div className="underlineLink">Sign in !</div>
              </CustomLink>
            </div>
            <h3
              className={`loginInfoMessage ${
                !(fetchError || validateError) ? 'success' : 'failure'
              }`}
            >
              {message}
            </h3>
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
        </div>
      </section>
    </div>
  );
}
