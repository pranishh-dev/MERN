export const ProductRow = ({ category, products }) => {
  let filteredProducts = products.filter((p) => p.category == category);
  return (
    <>
      {filteredProducts.map((p) => {
        return (
          <tr key={p.id}>
            <td className={!p.stocked?"out-of-stock":""}>{p.name}</td>
            <td className={!p.stocked?"out-of-stock":""}>{p.price}</td>
          </tr>
        );
      })}
    </>
  );
};
