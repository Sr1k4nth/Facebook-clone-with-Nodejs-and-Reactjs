import React, { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const AuthContexts = createContext();

export const AuthContext = ({ children }) => {

  console.log(children);
  const [user, setUser] = React.useState(null);
  const navigate = useNavigate();

  const login = async (data) => {
    // Implement login logic and update user state
    setUser(data);
    navigate("/");
  };

  const logout = () => {
    // Implement logout logic and reset user state
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(() => ({ user, login, logout }), [user]);
  return <AuthContexts.Provider value={value}>{children}</AuthContexts.Provider>;
};