import React, { createContext, useContext, useState } from "react";

export let ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  //   let nameContext = createContext(nulll);
  //   let data = useContext(nameContext);
  //   console.log(data);
  //   let theme = "light";
  const [theme, setTheme] = useState("light");
  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};
