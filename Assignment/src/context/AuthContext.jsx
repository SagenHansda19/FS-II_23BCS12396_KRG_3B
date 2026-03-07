import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Initialize from localStorage so login persists on refresh
  const [isAuthenticated, setIsAuthState] = useState(() => {
    return !!localStorage.getItem("token");
  });

  // Wrapper that also syncs to localStorage
  const setIsAuthenticated = (value) => {
    if (value) {
      localStorage.setItem("token", "loggedin");
    } else {
      localStorage.removeItem("token");
    }
    setIsAuthState(value);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
