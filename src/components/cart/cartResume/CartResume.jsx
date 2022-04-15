import { formatPrice } from "../../../helpers/formatPrice";
import { Button, Container, Spacer, Text } from "@nextui-org/react";

export const CartResume = ({ clearCart, totalPrice }) => {
  return (
    <Container css={{ marginBottom:"1.5rem" }}>
      {/* <Col> */}
        <Button
        bordered
        color="#1c0631"
          size="sm"
          css={{ marginLeft: "$5" }}
          onClick={clearCart}
        >
          Borrar todo
        </Button>
        <Spacer y={1} />
        <Text h3>Total: {formatPrice(totalPrice)}</Text>
      {/* </Col> */}
    </Container>
  );
};
