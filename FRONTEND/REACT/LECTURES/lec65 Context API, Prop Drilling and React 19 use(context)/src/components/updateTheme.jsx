import React, { use, useContext } from "react";
import { ThemeContext } from "./themeProvider";

export const UpdateTheme = () => {
  let { setTheme } = use(ThemeContext);
  return (
    <div>
      <h3>UpdateTheme</h3>
      <select
        name=""
        id=""
        onChange={(e) => setTheme(e.currentTarget.value)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
    </div>
  );
};
