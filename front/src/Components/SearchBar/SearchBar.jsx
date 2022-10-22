import React, { useState } from "react";
import { TextField } from "@mui/material";
import "./searchBar.css";
function SearchBar() {
  return (
    <div className="searchContainer">
      <center>
        <div className="searchBar">
          <TextField
            fullWidth
            id="Search"
            label="Search for Movie"
            variant="outlined"
            
          />
        </div>
      </center>
    </div>
  );
}

export default SearchBar;
