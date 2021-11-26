import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

function ProtectedRoute({ needAuth = true, component: Component, path }) {
  const { isLogged } = useContext(UserContext);
  const [userLogged] = isLogged;

  return (
    <Route
      path={path}
      render={(props) => {
        if ((userLogged && needAuth) || (!userLogged && !needAuth)) {
          return <Component />;
        }
        return (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        );
      }}
    />
  );
}

export default ProtectedRoute;
