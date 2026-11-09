import { ProductCategory } from "./productCategory";

export const ProductTable = ({ products, categories }) => {
  return (
    <div>
      {products.length === 0 ? (
        <p>No products found matching your filters.</p>
      ) : (
        <ProductCategory categories={categories} products={products} />
      )}
    </div>
  );
};
