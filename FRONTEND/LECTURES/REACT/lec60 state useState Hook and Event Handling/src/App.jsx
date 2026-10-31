import { useState } from "react";
import "./App.css";
import { Counter } from "./Components/counter";
import { Navbar } from "./Components/navbar";
import { Todo } from "./Components/Todo";
import { Input } from "./Components/Input";

function App() {
  let [todos, SetToDo] = useState("");
  let [count, setCount] = useState(0);
  return (
    <>
      <Navbar count={count} />
      <Counter count={count} setCount={setCount} />
      
      {/* <Counter />  */}
      {/* each component has its own state */}
    </>
  );
}

export default App;
