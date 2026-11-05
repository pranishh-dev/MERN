export const SearchBar = ({ setSearchTerm }) => {
  return (
    <form>
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter product name "
        onChange={(e) => {
          let input = e.currentTarget.value.trim();
          input ? setSearchTerm(input) : "";
        }}
      />
    </form>
  );
};
