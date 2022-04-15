import { useState } from "react";
import { CartListWrapper } from "../../components/cart/carListWrapper/CartListWrapper";
import { CartCongrat } from "../../components/cart/cartCongrat/CartCongrat";
import { CartListEmptyState } from "../../components/cart/cartListEmptyState/CartListEmptyState";
import { useCartContext } from "../../context/cartContext/CartContext";

export const CartContainer = () => {
  const { cartList } = useCartContext();
  const [id, setId] = useState("");

  return (
    <>
      {cartList.length === 0 && id === "" ?(
        <CartListEmptyState />
        ) : (
          !id ?(      
            <CartListWrapper
            setId={setId}
            id={id}
            />
            ) : (
            <CartCongrat id={id} />
          )
      )}
    </>
  );
};
