import { useState } from "react";
import { SearchBar } from "./searchBar";
import { StockFilter } from "./stockFilter";
import { ProductTable } from "./productTable";

export const RenderTable = ({ products, categories }) => {
  let [searchTerm, setSearchTerm] = useState("");
  let [inStockFilter, setInStockFilter] = useState(false);

  // let productsProp;
  // if (inStockFilter && searchTerm) {
  //   productsProp = products
  //     .filter((p) => p.name?.toLowerCase().includes(searchTerm.toLowerCase()))
  //     .filter((p) => p.stocked);
  // } else if (inStockFilter) {
  //   productsProp = products.filter((p) => p.stocked);
  // } else if (searchTerm) {
  //   productsProp = products.filter((p) =>
  //     p.name?.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  // } else {
  //   productsProp = products;
  // }

  let filteredProducts = products.filter(
    (p) =>
      p["name"].toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!inStockFilter || p.stocked)
  );
  let filteredCategories = [
    ...new Set(filteredProducts.map((p) => p.category)),
  ];
  return (
    <>
      <SearchBar  setSearchTerm={setSearchTerm} />
      <StockFilter inStockFilter={inStockFilter} setInStockFilter={setInStockFilter} />

      <ProductTable
        products={filteredProducts}
        categories={filteredCategories}
      />
    </>
  );
};
