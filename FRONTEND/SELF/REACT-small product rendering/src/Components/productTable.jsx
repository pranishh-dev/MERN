import { ProductCategory } from "./productCategory";

export const ProductTable = ({ products, categories }) => {
  return (
    <div>
      <ProductCategory categories={categories} products={products} />
    </div>
  );
};
