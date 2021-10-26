import './style.scss';
import CustomLink from '../CustomLink/CustomLink';
import Sectionlogo from '../SectionLogo/SectionLogo';

export default function Register() {
  return (
    <div className="emptyScreen">
      <Sectionlogo>Sign up!</Sectionlogo>
      <section className="login">
        <form className="loginForm">
          <header>
            <h1>Register</h1>
          </header>
          <div className="inputs">
            Name
            <input type="text" placeholder="Name..." required />
            Email
            <input type="email" placeholder="Email..." required />
            Password
            <input type="password" placeholder="Password..." required />
            Password
            <input type="password" placeholder="Repeat password..." required />
          </div>
          <div className="submitButtons">
            <div>
              Have an account ?
              <CustomLink path="/login">
                <div className="underlineLink">Sign in !</div>
              </CustomLink>
            </div>
            <button className="submitButton" type="submit">
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
              Password must constain from 8 to 20 characters, 1 capital leter
              and 1 number
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
