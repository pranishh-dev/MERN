import React, { useEffect, useState } from "react";
import "../loader.css";
import axios from "axios";
export const Products = () => {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // fetch("https://dummyjson.com/products")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setProducts(data.products);
    //     setIsLoading(false);
    //   });

    async function getProducts() {
      // let res = await fetch("https://dummyjson.com/products");
      // let data = await res.json();
      let { data } = await axios.get(
        "https://dummyjson.com/products"
      );
      setProducts(data.products);
      setIsLoading(false);
    }
    getProducts();
    return () => {
      console.log("cleanup");
    };
  }, []);

  let filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(input.toLowerCase().trim())
  );

  if (isLoading) return <div className="loader"></div>; //maynot see in breave bcoz of daRK MODE

  return (
    <>
      <form action="">
        <input type="text" onInput={(e) => setInput(e.currentTarget.value)} />
      </form>
      <ul>
        {filteredProducts.map((p) => {
          return <li key={p.id}>{p.title}</li>;
        })}
      </ul>
    </>
  );
};
