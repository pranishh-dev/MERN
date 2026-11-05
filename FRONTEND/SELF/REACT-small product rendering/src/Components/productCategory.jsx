import React from "react";
import { ProductRow } from "./productRow";
import "./../components.css";

export const ProductCategory = ({ categories, products }) => {
  return (
    <>
      {categories.map((category) => {
        return (
          <div id={category} key={category}>
            <h3>{category}</h3>

            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                </tr>
              </thead>

              <tbody>
                <ProductRow
                  category={category}
                  products={products}
                />
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
};
