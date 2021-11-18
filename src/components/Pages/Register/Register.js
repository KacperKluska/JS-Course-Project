import './style.scss';
import React from 'react';
import { useState } from 'react/cjs/react.development';
import CustomLink from '../../CustomLink/CustomLink';
import Sectionlogo from '../../SectionLogo/SectionLogo';
import RegisterInputs from './RegisterInputs';
import validate from './validate';
import { register } from '../../../services/requests';

export default function Register() {
  const [message, setMessage] = useState('');
  const [fetchError, setFetchError] = useState(false);
  const [validateError, setValidateError] = useState(false);

  const defaultUserData = {
    name: '',
    surname: '',
    email: '',
    password: '',
    password2: '',
  };

  const [userData, setUserData] = React.useState({
    ...defaultUserData,
  });

  const handleUserData = (data) => {
    setUserData((prev) => ({ ...prev, ...data }));
  };

  const registerUser = async (e) => {
    e.preventDefault();
    const result = validate(
      setMessage,
      userData.password,
      userData.password2,
      userData.name,
      userData.surname,
    );
    setValidateError(!result);

    if (result) {
      try {
        const { data, status } = await register(
          userData.name,
          userData.surname,
          userData.email,
          userData.password,
        );
        if (status !== 200) {
          setFetchError(true);
          // eslint-disable-next-line no-unused-expressions
          status === 404
            ? setMessage("Couldn't connect to the server")
            : setMessage(data.error);
        } else {
          setFetchError(false);
          setMessage(data.message);
          setUserData({ ...defaultUserData });
        }
      } catch (err) {
        console.error(err);
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
            userData={userData}
            handleUserData={handleUserData}
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
