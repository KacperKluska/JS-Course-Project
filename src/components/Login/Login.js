import "./style.scss";

export default function Login() {
  return (
    <div className="emptyScreen">
      <section id="login">
        <header>
          <h1>Login</h1>
        </header>
        <div className="inputs">
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="Password"></input>
        </div>
      </section>
    </div>
  );
}
