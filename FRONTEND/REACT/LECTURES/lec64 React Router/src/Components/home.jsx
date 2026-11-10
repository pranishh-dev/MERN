import React from "react";
import { Link } from "react-router-dom";

export const Home = ({ products }) => {
  return (
    <div>
      <p>Home</p>
      <ul>
        {products.map((p) => (
          <>
            <Link to={`product-page/${p.id}`}>{p.title}</Link>
            <br />
          </>
        ))}
      </ul>
    </div>
  );
};
