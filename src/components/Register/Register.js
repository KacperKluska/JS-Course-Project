import "./style.scss";
import CustomLink from "../CustomLink/CustomLink";

export default function Register() {
  return (
    <div className="emptyScreen">
      <form action="">
        <section id="register">
          <header>
            <h1>Register</h1>
          </header>
          <div className="inputs">
            <input type="text" placeholder="Name"></input>
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
            <input type="password" placeholder="Repeat password"></input>
          </div>
          <div className="submitButtons">
            <div>
              Have an account ?
              <CustomLink path="/login">
                <div id="underlineLabel">Sign in !</div>
              </CustomLink>
            </div>
            <button className="submitButton" type="submit">
              Register
            </button>
          </div>
        </section>
      </form>
    </div>
  );
}
