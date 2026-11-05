import React, { useState } from "react";

export const Product = ({ name }) => {
  let [count, SetCount] = useState(0);

  return (
    <div >
      <h3>{name}</h3>
      <button onClick={() => SetCount((prev) => prev + 1)}>
        Quantity: {count}
      </button>
    </div>
  );
};
