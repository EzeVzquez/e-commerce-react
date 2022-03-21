import { useCartContext } from "../../context/cartContext/CartContext";
import { Cart } from "../../components/cart/Cart";
import { Button, Col, Grid, Row } from "@nextui-org/react";

export const CartContainer = () => {
  const { cartList, clearCart } = useCartContext();

  const clear = () => clearCart()

  return (
      <Grid.Container css={{margin:"20px"}}>
        <Col>
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
        </Col>
      <Button css={{background:"#1c0631"}} onClick={clear} >Borrar todo</Button>
      </Grid.Container>
  );
};
