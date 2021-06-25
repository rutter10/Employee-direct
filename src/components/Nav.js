import React from "react";
import SearchBox from "./SearchBox.js";

function Nav({ handleSearchChange }) {
  return (
    <nav>
      <div id="navbarNav">
        <SearchBox handleSearchChange={handleSearchChange} />
      </div>
    </nav>
  );
}
export default Nav;
