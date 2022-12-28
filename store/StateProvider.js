import React, { createContext, useContext, useState } from "react";
// Prepares the data layer
export const StateContext = createContext();

//wrap our app and provide the Data layer
export const StateProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openSignInAlert, setSignInAlert] = useState(false);
  const [searchTermLg, setSearchTermLg] = useState("");
  const [getSSRData, setGetSSRData] = useState([]);
  const [stateCategory, setCategory] = useState({ cate: "all", category_id: "all" });

  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product, quantity) => {
    // const checkProductInCart = cartItems?.find(
    //   (item) => item._id === product._id
    // );
    //add product to cart items
    setCartItems([...cartItems, { ...product }]);

    toast.success(`${product.name} added to the cart`);
  };

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    index = cartItems.findIndex((product) => product._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);
    setCartItems(newCartItems);
  };

  return (
    <StateContext.Provider
      value={{
        searchTerm,
        stateCategory,
        getSSRData,
        searchTermLg,
        openSignInAlert,
        showCart,
        cartItems,
        setShowCart,
        setCartItems,
        onAdd,
        onRemove,
        setSignInAlert,
        setSearchTermLg,
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
