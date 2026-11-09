import { useState } from "react";
import "./App.css";
import { Product } from "./key";

function App() {
  let [products, SetProducts] = useState([
    { id: 1, name: "monitor" },
    { id: 2, name: "keyboard" },
    { id: 3, name: "mouse" },
  ]);

  function removeFirstProduct() {
    SetProducts((prev) => prev.slice(1));
  }

  return (
    <>
      {products.map(({ id, name },i) => {
        return <Product key={id} name={name} />;
      })}

      <button type="button" onClick={removeFirstProduct}>
        Remove First Product
      </button>
    </>
  );
}

export default App;
