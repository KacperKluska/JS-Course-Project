import React from 'react';

const RegisterInputs = ({ userData, handleUserData, error }) => (
  <div className="loginInputs">
    Name
    <input
      className={`${error && 'failure'}`}
      type="text"
      placeholder="Name..."
      required
      value={userData.name}
      onChange={(e) => {
        handleUserData({ name: e.target.value });
      }}
    />
    Surname
    <input
      className={`${error && 'failure'}`}
      type="text"
      placeholder="Surname..."
      required
      value={userData.surname}
      onChange={(e) => {
        handleUserData({ surname: e.target.value });
      }}
    />
    Email
    <input
      className={`${error && 'failure'}`}
      type="email"
      placeholder="Email..."
      required
      value={userData.email}
      onChange={(e) => {
        handleUserData({ email: e.target.value });
      }}
    />
    Password
    <input
      className={`${error && 'failure'}`}
      type="password"
      placeholder="Password..."
      required
      value={userData.password}
      onChange={(e) => {
        handleUserData({ password: e.target.value });
      }}
    />
    Repeat password
    <input
      className={`${error && 'failure'}`}
      type="password"
      placeholder="Repeat password..."
      required
      value={userData.password2}
      onChange={(e) => {
        handleUserData({ password2: e.target.value });
      }}
    />
  </div>
);

export default RegisterInputs;
