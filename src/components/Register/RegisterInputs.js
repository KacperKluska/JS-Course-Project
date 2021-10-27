import React from 'react';

const RegisterInputs = ({
  name,
  setName,
  surname,
  setSurname,
  email,
  setEmail,
  password,
  setPassword,
  password2,
  setPassword2,
  error,
}) => (
  <div className="loginInputs">
    Name
    <input
      className={`${error && 'failure'}`}
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
      className={`${error && 'failure'}`}
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
      className={`${error && 'failure'}`}
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
      className={`${error && 'failure'}`}
      type="password"
      placeholder="Password..."
      required
      value={password}
      onChange={(e) => {
        setPassword(e.target.value);
      }}
    />
    Repeat password
    <input
      className={`${error && 'failure'}`}
      type="password"
      placeholder="Repeat password..."
      required
      value={password2}
      onChange={(e) => {
        setPassword2(e.target.value);
      }}
    />
  </div>
);

export default RegisterInputs;
