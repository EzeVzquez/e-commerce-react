import { Col, Container, Grid, Row } from "@nextui-org/react";
import { useCartContext } from "../../../context/cartContext/CartContext";
import { CartForm } from "../cartForm/CartForm";
import { CartList } from "../cartList/CartList";
import { CartResume } from "../cartResume/CartResume";
import { generateOrder } from "../../../helpers/generateOrder";

export const CartListWrapper = ({ setId }) => {
  const { cartList, clearCart, deleteItem, totalPrice } = useCartContext();

  const handleSubmitCart = (dataForm) => {
    generateOrder(dataForm, totalPrice, cartList)
      .then((response) => {
        setId(response.id);
      })
      .catch((error) => console.error(error))
      .finally(console.log("finalizado"));
  };

  return (
    <Grid.Container css={{ margin: "20px" }}>
      <Row>
        <Container>
          <CartList cartList={cartList} deleteItem={deleteItem} />
          <CartResume clearCart={clearCart} totalPrice={totalPrice} />
        </Container>
        <CartForm onSubmit={handleSubmitCart} />
      </Row>
    </Grid.Container>
  );
};
