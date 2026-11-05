import React, { useState } from "react";
import { SearchBar } from "./searchBar";
import { StockFilter } from "./stockFilter";
import { ProductTable } from "./productTable";

export const RenderTable = ({ products, categories }) => {
  let [searchTerm, setSearchTerm] = useState("");
  let [inStockFilter, setInStockFilter] = useState(false);

  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <StockFilter inStockFilter={inStockFilter} setInStockFilter={setInStockFilter} />
      <ProductTable products={products} categories={categories} />
    </>
  );
};
