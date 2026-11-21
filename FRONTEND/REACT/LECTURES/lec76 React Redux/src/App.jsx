import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./store/slices/counterSlice";

function App() {
  const dispatch = useDispatch();
  let count = useSelector((state) => state.counter.value);

  return (
    <div>
      <p>{count}</p>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(increase());
          }}
        >
          Increase Count
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(decrease());
          }}
        >
          Decrease Count
        </button>
      </div>
    </div>
  );
}

export default App;
