import "./style.scss";
import CustomLink from "../CustomLink/CustomLink";
import Sectionlogo from "../SectionLogo/SectionLogo";

export default function Login() {
  /**
   * TODO
   * I need to move styles to global file, becouse register uses the same styles classes
   */
  return (
    <div className="emptyScreen">
      <Sectionlogo>Sign in!</Sectionlogo>
      <section className="login">
        <form className="loginForm">
          <header>
            <h1>Sign in</h1>
          </header>
          <div className="inputs">
            Email
            <input type="email" placeholder="Email..." required></input>
            Password
            <input type="password" placeholder="Password..." required></input>
          </div>
          <div className="submitButtons">
            <CustomLink path="/error">
              <div className="underlineLink">Forgot password ?</div>
            </CustomLink>
            <button className="submitButton" type="submit">
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
            <li>Posibility of getting discount</li>
            <li>Autocomplete form</li>
          </ul>
          <CustomLink path="/register">
            <button className="loginInfoButton">Sign up</button>
          </CustomLink>
        </div>
      </section>
    </div>
  );
}
