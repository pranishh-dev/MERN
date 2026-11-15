import React, { useState } from "react";

export const UseCount = () => {
  const [count, setCount] = useState(0);
  let increaseCount = () => setCount((p) => p + 1);
  let decreaseCount = () => setCount((p) => p - 1);
  return { count, increaseCount, decreaseCount };
};
