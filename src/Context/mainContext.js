import React, { createContext, useState } from "react";

export const mainContext = createContext({
  searchValue: "",
  searchHandler: () => {},
});

const ContextProvider = (props) => {
  const [searchVal, setSearchVal] = useState("");

  const searchHandler = (value) => {
    setSearchVal(value);
  };

  return <mainContext.Provider value={{ searchVal, searchHandler }}>{props.children}</mainContext.Provider>;
};

export default ContextProvider;
