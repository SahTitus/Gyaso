import React, { createContext, useContext, useState } from "react";
// Prepares the data layer
export const StateContext = createContext();

//wrap our app and provide the Data layer
export const StateProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <StateContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

//Pull information from the data layer
export const useStateContex = () => useContext(StateContext);
