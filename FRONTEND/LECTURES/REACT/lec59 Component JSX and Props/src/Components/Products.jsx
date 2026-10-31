import { Product } from "./Product";

export const Products = ({products}) => {
    console.log(products);
  return (
    <div>
      {products.map(({ title, price },i) => {
        return <Product title={title} price={price} key={i} />;
      })}
    </div>
  );
};
