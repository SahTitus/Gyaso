import React, { createContext, useContext, useState } from "react";
// Prepares the data layer
export const StateContext = createContext();

//wrap our app and provide the Data layer
export const StateProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [getSSRData, setGetSSRData] = useState([]);
  const [category, setCategory] = useState({ cate: "all", category_id: "all" });

  return (
    <StateContext.Provider
      value={{
        searchTerm,
        category,
        getSSRData,
        setGetSSRData,
        setSearchTerm,
        setCategory,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

//Pull information from the data layer
export const useStateContex = () => useContext(StateContext);
