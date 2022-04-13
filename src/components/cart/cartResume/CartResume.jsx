import { formatPrice } from "../../../helpers/formatPrice";
import { Button, Col, Container, Text } from "@nextui-org/react";

export const CartResume = ({ clearCart, totalPrice }) => {
  return (
    <Container>
      <Col>
        <Button
        bordered
        color="#1c0631"
          size="sm"
          css={{ marginLeft: "$5" }}
          onClick={clearCart}
        >
          Borrar todo
        </Button>
        <Text h3>Cantidad total a pagar: {formatPrice(totalPrice)}</Text>
      </Col>
    </Container>
  );
};
