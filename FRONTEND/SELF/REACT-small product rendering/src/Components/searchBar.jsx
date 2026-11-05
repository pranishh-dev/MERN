import React from "react";

export const SearchBar = ({ setSearchTerm, searchTerm }) => {
  return (
    <form>
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter product name "
        onChange={(e) => {
          console.log(e.currentTarget.value);
        }}
      />
    </form>
  );
};
