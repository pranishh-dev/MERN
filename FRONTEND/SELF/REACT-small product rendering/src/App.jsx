import { useState } from "react";
import "./App.css";
import { RenderTable } from "./Components/renderTable";
import { products } from "./Data/product";

function App() {
  const categories = [...new Set(products.map((p) => p.category))];
  return (
    <>
      <RenderTable products={products} categories={categories} />
    </>
  );
}

export default App;
