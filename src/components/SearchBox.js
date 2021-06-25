import React from "react";

function SearchBox({ handleSearchChange }) {
  return (
    <div className="ui search">
      <form>
        <input
          className="prompt"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={e => handleSearchChange(e)}
        />
        <i class="search icon"></i>
      </form>
    </div>
  );
}
export default SearchBox;
