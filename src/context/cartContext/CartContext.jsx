import {  createContext, useContext } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartlist] = useLocalStorage("product", []);

  
  const clearCart = () => setCartlist([]);
  
  const isInCart = (id) => cartList.some(item => item.id === id); 
  
  const addCart = (item) => {
    if(isInCart(item.id)){
      console.log("isInCart");
    } else {
      setCartlist([...cartList, item]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
