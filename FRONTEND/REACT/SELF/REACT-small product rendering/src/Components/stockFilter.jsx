export const StockFilter = ({ inStockFilter, setInStockFilter }) => {
  return (
    <form>
      <input
        type="checkbox"
        name="stock"
        id="stock"
        onClick={(e) => {
          e.currentTarget.checked
            ? setInStockFilter(true)
            : setInStockFilter(false);
        }}
        checked={inStockFilter}
      />
      <label htmlFor="stock">Filter Stock Products</label>
    </form>
  );
};
