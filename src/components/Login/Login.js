import "./style.scss";
import CustomLink from "../CustomLink/CustomLink";

export default function Login() {
  return (
    <div className="emptyScreen">
      <form action="">
        <section id="login">
          <header>
            <h1>Login</h1>
          </header>
          <div className="inputs">
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
          </div>
          <div className="submitButtons">
            <CustomLink path="/error">
              <div id="underlineLabel">Forgot password ?</div>
            </CustomLink>
            <button className="submitButton" type="submit">
              Login
            </button>
          </div>
        </section>
      </form>
    </div>
  );
}
