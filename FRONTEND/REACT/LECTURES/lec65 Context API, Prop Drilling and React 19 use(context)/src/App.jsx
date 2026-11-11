import { use, useContext, useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { UserContext } from "./main";
import { ThemeContext } from "./components/themeProvider";
import { UpdateTheme } from "./components/updateTheme";

const GrandChild = () => {
  // let value = useContext(UserContext);
  let value = use(UserContext);
  return <div>GrandChild -{value} </div>;
};

const Child = () => {
  return (
    <div>
      Child
      <GrandChild />
    </div>
  );
};

const Parent = () => {
  return (
    <div>
      Parent
      <Child />
    </div>
  );
};

function App() {
  let value = useContext(UserContext);
  let { theme} = use(ThemeContext);
  return (
    <>
      App Theme : {theme}
      {/* <Parent /> */}
      <UpdateTheme />
    </>
  );
}

export default App;
