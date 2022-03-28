import { useCartContext } from "../../context/cartContext/CartContext";
import { Cart } from "../../components/cart/Cart";
import { Button, Col, Grid, Text } from "@nextui-org/react";
import { formatPrice } from "../../helpers/formatPrice";
import { Link } from "react-router-dom";

export const CartContainer = () => {
  const { cartList, clearCart, deleteItem, totalPrice } = useCartContext();

  const clear = () => clearCart();

  return (
    <>
      {cartList.length === 0 ? (
        <Grid.Container alignContent="center" direction="column">
              <Text h2>El carrito se encuentra vacio :(</Text>
              <Link to={`/`}>
              <Button css={{width:"20px", margin:"auto", background:"$purple500"}}>Volver al inicio</Button>
              </Link>
        </Grid.Container>
      ) : (
        <Grid.Container css={{ margin: "20px" }}>
          <Col>
            {cartList.map((product) => (
              <div key={product.id}>
                <Cart
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
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
