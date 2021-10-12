import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.scss';

const ErrorPage = ({ errorCode, children }) => {
  const location = useLocation();

  return (
    <div className="errorScreen">
      <h1>{errorCode}</h1>
      <p>
        Couldn&apos;t find localhost{location.pathname}
        <br />
        {children}
        <br />
        Click{' '}
        <Link className="linkA" to="/">
          <b>here</b>
        </Link>{' '}
        to go back to main page
      </p>
    </div>
  );
};

export default ErrorPage;
