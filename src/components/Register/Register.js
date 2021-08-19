import "./style.scss";

export default function Register() {
  return (
    <div className="emptyScreen">
      <section id="login">
        <header>
          <h1>Register</h1>
        </header>
        <div className="inputs">
          <input type="text" placeholder="Name"></input>
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="Password"></input>
          <input type="password" placeholder="Repeat password"></input>
        </div>
      </section>
    </div>
  );
}
