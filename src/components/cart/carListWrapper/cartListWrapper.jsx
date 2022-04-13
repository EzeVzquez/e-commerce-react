import { Container, Grid, Row } from "@nextui-org/react";
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
    <Container css={{ margin: "20px 0" }}>
        <Container>
          <CartList cartList={cartList} deleteItem={deleteItem} />
          <CartResume clearCart={clearCart} totalPrice={totalPrice} />
        </Container>
        <CartForm onSubmit={handleSubmitCart} clearCart={clearCart} />
    </Container>
  );
};
