import "./CartListWrapper.css";
import { useCartContext } from "../../../context/cartContext/CartContext";
import { CartForm } from "../cartForm/CartForm";
import { CartList } from "../cartList/CartList";
import { CartResume } from "../cartResume/CartResume";
import { generateOrder } from "../../../helpers/generateOrder";

export const CartListWrapper = ({ setId }) => {
  const { cartList, clearCart, deleteItem, totalPrice } = useCartContext();

  const handleSubmitCart = (dataForm) => {
    console.log(dataForm);
    generateOrder(dataForm, totalPrice, cartList)
      .then((response) => {
        setId(response.id);
        clearCart();
      })
      .catch((error) => console.error(error))
      .finally();
  };
  return (
    // <Container css={{ margin: "20px 0" }}>
      <div className="cart-wrapper">
      <div className="cart-card_container">
        <CartList cartList={cartList} deleteItem={deleteItem} />
      </div>
      <div className="cart-resume_container" >
        <CartResume clearCart={clearCart} totalPrice={totalPrice} />
        <CartForm onSubmit={handleSubmitCart} clearCart={clearCart} />
      </div>
      </div>
    // </Container>
  );
};


