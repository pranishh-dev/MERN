import React, { useEffect, useState } from "react";
import { User } from "./Components/User";
import { Post } from "./Components/post";
import { Window_wh } from "./Components/window_wh";
import { Products } from "./Components/products";
import Timer from "./Components/timer";

export const App = () => {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <>
      {showTimer && <Timer />}

      <button
        onClick={() => {
          let nextState = !showTimer;
          setShowTimer(nextState);
          console.log(nextState);
        }}
      >
        Toggle Timer
      </button>

      <User />
      <Post />
      <Window_wh />
      <Products />
    </>
  );
};
