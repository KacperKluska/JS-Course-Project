import React from 'react';

export const UserContext = React.createContext('');

export const UserContextProvider = ({ children }) => {
  const [id, setId] = React.useState('');
  return (
    <UserContext.Provider value={[id, setId]}>{children}</UserContext.Provider>
  );
};
