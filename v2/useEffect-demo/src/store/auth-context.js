import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // *** useEffect() ***
  // - Empty array: acts like componentDidMount as in, it only runs once.
  // - No second argument: acts as both componentDidMount and componentDidUpdate, as in it runs first on mount and then on every re-render.
  // - Array as second argument with any value inside, eg , [variable1]: will only execute the code inside your useEffect hook ONCE on mount,
  //   as well as whenever that particular variable (variable1) changes.
  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", 1);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
