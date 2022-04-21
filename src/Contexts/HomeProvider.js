import React, { createContext, useState } from "react";

const ThemContext = createContext();
console.log(ThemContext);

const HomeProvider = ({ children }) => {
  const [theme, setTheme] = useState("green");
  const toggleTheme = e => {
    setTheme(e.target.id);
  };

  const value = { theme, toggleTheme };

  return <ThemContext.Provider value={value}>{children}</ThemContext.Provider>;
};

export { HomeProvider, ThemContext };
