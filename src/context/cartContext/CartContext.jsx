import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [quantityInCart, setQuantityInCart] = useState (0)
  const [cartList, setCartList] = useLocalStorage("product", []);

  // const deleteItem = (id) => {
  //   const item = cartList.find((item) => item.id === id);

    
  //   if (item.cantidad === 1) {
  //     setCartList(cartList.filter((item) => item.id !== id));
  //   } else {
  //     setCartList(
  //       cartList.map((product) => {
  //         if (product.id === item.id) {
  //           return { ...item, cantidad: item.cantidad - 1 };
  //         }
  //         return product;
  //       })
  //     );
  //   }
  // };

  function deleteItem(id) {
    const newCartList = cartList.filter((item) => item.id !== id);
    setCartList(newCartList);
  }

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

  useEffect(() => {
    const totalPrice = cartList.map((product) => {
      return {...product, total: product.cantidad * product.price}
    });
    setTotalPrice(totalPrice.reduce(
      (previousValue, currentValue) => previousValue + currentValue.total, 0    
    ))

    const quantityInCart = cartList.map((product)=> {
      return {...product, totalQuantity: product.cantidad}
    });
    setQuantityInCart(quantityInCart.reduce(
      (previousValue, currentValue)=> previousValue + currentValue.totalQuantity, 0
    ))
  },[cartList])

  return (
    <CartContext.Provider
      value={{
        cartList,
        addCart,
        clearCart,
        deleteItem,
        totalPrice,
        quantityInCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
