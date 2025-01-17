import { createContext, useState, useContext } from "react";

const Theme = createContext();

// Theme Provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    console.log(theme);
  };

  return (
    <Theme.Provider value={{ theme, toggleTheme }}>{children}</Theme.Provider>
  );
};

export const useTheme = () => useContext(Theme);
