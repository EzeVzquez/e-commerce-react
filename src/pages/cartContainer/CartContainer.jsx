import { useCartContext } from "../../context/cartContext/CartContext";
import { Cart } from "../../components/cart/Cart";
import { Button, Col, Grid, Text } from "@nextui-org/react";
import { formatPrice } from "../../helpers/formatPrice";

export const CartContainer = () => {
  const { cartList, clearCart, deleteItem, totalPrice } = useCartContext();

  const clear = () => clearCart();

  return (
    <>
      {cartList.length === 0 ? (
        <p>no hay nada</p>

      ) : (
        <Grid.Container css={{ margin: "20px" }}>
          <Col>
            {cartList.map((product) => (
              <div key={product.id}>
                <Cart
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  pictureUrl={product.pictureUrl}
                  count={product.cantidad}
                  onDelete={deleteItem}
                  totalItem={product.cantidad * product.price}
                ></Cart>
              </div>
            ))}
            <Text h3>Cantidad Total a pagar:{formatPrice(totalPrice)}</Text>
          </Col>
          <Button css={{ background: "#DDA9F9", marginRight: "$5" }}>
            Ir a pagar
          </Button>
          <Button
            css={{ background: "#1c0631", marginLeft: "$5" }}
            onClick={clear}
          >
            Borrar todo
          </Button>
        </Grid.Container>
      )}
    </>
  );
};
