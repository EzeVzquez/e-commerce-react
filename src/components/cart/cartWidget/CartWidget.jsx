import { CartIcon } from "../../../assets/svg/cartIcon/CartIcon";
import { useCartContext } from "../../../context/cartContext/CartContext";
import { Grid, Row, Text } from "@nextui-org/react";

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
        <Grid.Container justify="center">
          <Row>
            <Grid>
            <CartIcon />
            </Grid>
            <div
              style={{
                width:"20px",
                height:"20px",
                background: "#5E1DAD",
                borderRadius:"50%",
                display: "grid",
                placeItems: "center"
              }}
            >
              <Text size="13px" color="$gray200">
                {quantityInCart}
              </Text>
            </div>
          </Row>
        </Grid.Container>
      )}
    </>
  );
};
