import { Product } from "./Product";

const books = [
  {
    title: "rsn",
    price: "infinity",
  },
  {
    title: "chaturashiji",
    price: "infinity",
  },
];

export const Books = () => {
  return (
    <div>
      {books.map(({ title, price }, i) => {
        return  <Product key={i} title={title} price={price} />;
      })}
    </div>
  );
};
