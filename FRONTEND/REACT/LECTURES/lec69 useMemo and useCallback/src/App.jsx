import React, { useCallback, useMemo, useState } from "react";
import { UseCount } from "./hooks/useCount";
import { ChildCompo } from "./components/childCompo";

function calculateTotal() {
  //expensive operation
  let sum = 0;
  for (let i = 0; i <= 1000000000; i++) {
    sum += i;
  }
  return sum;
}
export const App = () => {
  let { count, increaseCount, decreaseCount } = UseCount();

  //lags whole component or page
  // let total = calculateTotal()

  let total = useMemo(() => {
    console.log("use memo ho hai");
    return calculateTotal();
  }, []);

  function greet() {
    //re-created on every re-render with new reference so newly created function is differnet than the old one
    console.log("hi jii");
  }

  let MemoizedGreet = useCallback(() => {
    // useCallback memoizes the outer function
    console.log("hi jii");
  }, []);
  
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => increaseCount()}>Increase Count</button>
      <br />
      <button onClick={() => decreaseCount()}>Decrease Count</button>
      <br />
      <p>Total : {total}</p>
      {/* <ChildCompo {...{ count }} /> */}
      <ChildCompo {...{ MemoizedGreet }} />
    </>
  );
};
