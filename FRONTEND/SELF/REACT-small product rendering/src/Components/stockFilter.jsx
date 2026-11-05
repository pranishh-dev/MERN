import React, { useState } from "react";

export const StockFilter = ({ inStockFilter, setInStockFilter }) => {
  return (
    <form>
      <input
        type="checkbox"
        name="stock"
        id="stock"
        onClick={(e) => {
          e.currentTarget.checked
            ? setInStockFilter((prev) => true)
            : setInStockFilter((prev) => false);
        }}
      />
      <label htmlFor="stock">Filter Stock Products</label>

      {/* pass inStockfilter */}
      {console.log(inStockFilter)}
    </form>
  );
};
