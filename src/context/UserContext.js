export const UserContext = React.createContext("");

export const UserContextProvider = (props) => {
  return <UserContext.Provider>{props.children}</UserContext.Provider>;
};
