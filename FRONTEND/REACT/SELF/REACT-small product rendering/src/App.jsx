import "./App.css";
import { RenderTable } from "./Components/renderTable";
import { products } from "./Data/product";

function App() {
  const categories = [...new Set(products.map((p) => p.category))];
  products.map((C) => {
    console.log(C);
  });
  return (
    <>
      <RenderTable products={products} categories={categories} />
    </>
  );
}

export default App;
