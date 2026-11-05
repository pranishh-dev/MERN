export const ProductRow = ({ category, products }) => {
  console.log(category);
  let filteredProducts = products.filter((p) => p.category == category);
  return (
    <>
      {filteredProducts.map((p) => {
        return (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.price}</td>
          </tr>
        );
      })}
    </>
  );
};
