import { useCartContext } from "../../context/cartContext/CartContext";
import { Cart } from "../../components/cart/Cart";

export const CartContainer = () => {
  const { cartList } = useCartContext();

  return (
    <div>
      {cartList.map((product) => (
        <div key={product.id}>
          <Cart
            title={product.title}
            price={product.price}
            pictureUrl={product.pictureUrl}
            count={product.cantidad}
          ></Cart>
        </div>
      ))}
    </div>
  );
};
