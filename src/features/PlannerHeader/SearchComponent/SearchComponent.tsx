import React from 'react';
import {SearchIconStyled, SearchTextFieldStyled} from "./SearchComponent.styled";

const SearchComponent = () => {

  return (
      <span>
        <SearchIconStyled />
        <SearchTextFieldStyled color="primary" />
      </span>
  );
}

export default SearchComponent;
