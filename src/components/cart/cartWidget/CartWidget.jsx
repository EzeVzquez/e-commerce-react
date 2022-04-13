import { CartIcon } from "../../../assets/svg/cartIcon/CartIcon";
import { useCartContext } from "../../../context/cartContext/CartContext";
import "./CartWidget.css"
import { Grid, Row } from "@nextui-org/react";

export const CartWidget = () => {
  const { quantityInCart } = useCartContext();

  return (
    <>
      {quantityInCart === 0 ? (
        <Grid.Container>
          <Row>
            <CartIcon />
          </Row>
        </Grid.Container>
      ) : (
        <div className="cartWidget-container">
          <CartIcon />
          <div className="cartWidget-quantity"
          >
            <p className="cartWidget-text" >
              {quantityInCart}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
