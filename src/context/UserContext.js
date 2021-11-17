import { React } from 'react';

export const UserContext = React.createContext('');

export const UserContextProvider = ({ children }) => (
  <UserContext.Provider>{children}</UserContext.Provider>
);
