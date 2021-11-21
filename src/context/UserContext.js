import React from 'react';
import { verifyUser } from '../services/requests';

export const UserContext = React.createContext('');

export const UserContextProvider = ({ children }) => {
  const [userLogged, setUserLogged] = React.useState(false);

  React.useEffect(async () => {
    try {
      const response = await verifyUser();
      if (response.status === 200) {
        setUserLogged(true);
      } else {
        setUserLogged(false);
      }
    } catch (err) {
      console.error(err);
    }
  }, [userLogged]);

  return (
    <UserContext.Provider value={{ isLogged: [userLogged, setUserLogged] }}>
      {children}
    </UserContext.Provider>
  );
};
