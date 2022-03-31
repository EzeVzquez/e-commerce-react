import { Col, Grid } from "@nextui-org/react";
import { useCartContext } from "../../../context/cartContext/CartContext";
import { CartForm } from "../cartForm/CartForm";
import { CartList } from "../cartList/CartList";
import { CartResume } from "../cartResume/CartResume";
import { generateOrder} from "../../../helpers/generateOrder"

export const CartListWrapper = ({setId}) => {
  const { cartList, clearCart, deleteItem, totalPrice } = useCartContext();

  const handleSubmitCart = (dataForm)=> {
      generateOrder(dataForm, totalPrice, cartList)
      .then((response) => {setId(response.id)})
      .catch((error)=> console.error(error))
      .finally(console.log("finalizado"))
  }


  return (
    <Grid.Container css={{ margin: "20px" }}>
      <Col>
        <CartList cartList={cartList} deleteItem={deleteItem} />
      </Col>
      <CartResume clearCart={clearCart} totalPrice={totalPrice} />
      <CartForm onSubmit={handleSubmitCart} />
    </Grid.Container>
  );
};
