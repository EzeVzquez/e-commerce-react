import { createContext, useContext } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useLocalStorage("product", []);

  const deleteItem = (id) => {
    const item = cartList.find((item) => item.id === id);

    if (item.cantidad === 1) {
      setCartList(cartList.filter((item) => item.id !== id));
    } else {
      setCartList(
        cartList.map((product) => {
          if (product.id === item.id) {
            return { ...item, cantidad: item.cantidad - 1 };
          }
          return product;
        })
      );
    }
  };

  const clearCart = () => setCartList([]);

  const isInCart = (id) => cartList.find((item) => item.id === id);

  const addCart = (item) => {
    if (isInCart(item.id)) {
      setCartList(
        cartList.map((product) => {
          if (product.id === item.id) {
            return { ...item, cantidad: item.cantidad + product.cantidad };
          }
          return product;
        })
      );
    } else {
      setCartList([...cartList, item]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addCart,
        clearCart,
        deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
