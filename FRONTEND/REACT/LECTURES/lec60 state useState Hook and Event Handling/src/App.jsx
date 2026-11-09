import { useState } from "react";
import "./App.css";
import { Counter } from "./Components/counter";
import { Navbar } from "./Components/navbar";
import { TodoApp } from "./TODO/app";

function App() {
  let [count, setCount] = useState(0);

  return (
    <>
      <Navbar count={count} />
      <Counter count={count} setCount={setCount} />

      {/* <Counter />  */}
      {/* each component has its own state */}

      <TodoApp />
    </>
  );
}

export default App;
