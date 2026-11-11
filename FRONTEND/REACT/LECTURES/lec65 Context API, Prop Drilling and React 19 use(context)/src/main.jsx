import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./components/themeProvider.jsx";

export let UserContext = createContext(null);
let username = "Pranish";
createRoot(document.getElementById("root")).render(
  // <UserContext value={username}>
  //   <App />
  // </UserContext>

  <ThemeProvider>
    <App />
  </ThemeProvider>
);
