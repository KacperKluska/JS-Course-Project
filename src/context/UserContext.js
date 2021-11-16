import React from 'react';

export const UserContext = React.createContext('');

export const UserContextProvider = ({ children }) => {
  const [id, setId] = React.useState('');
  const [userLogged, setUserLogged] = React.useState(false);

  React.useEffect(async () => {
    try {
      const response = await fetch('http://localhost:3001/verify_user', {
        credentials: 'include',
      });
      if (response.status === 200) {
        const data = await response.json();
        setId(data.id);
        console.log(data.id);
      } else {
        setId('');
        setUserLogged(false);
      }
    } catch (err) {
      console.error(err);
    }
  }, [userLogged]);

  return (
    <UserContext.Provider
      value={{ userId: [id, setId], isLogged: [userLogged, setUserLogged] }}
    >
      {children}
    </UserContext.Provider>
  );
};
