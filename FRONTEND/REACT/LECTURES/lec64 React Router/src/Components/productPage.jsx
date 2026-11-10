import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = ({products}) => {
 
  // const params = useParams();
  // console.log(params);

  const { id } = useParams();
  console.log(id);
  return (
    <>
      <div>ProductPage</div>
      {id>0  ? (
        <h1>{products.find((p) => p.id == Number(id)).title}</h1>
      ) : (
        "Product Not found"
      )}
    </>
  );
};

export default ProductPage;
