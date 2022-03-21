import { Card, Grid, Row, Text } from "@nextui-org/react";
import { formatPrice } from "../../helpers/formatPrice";
import "./Cart.css";

export const Cart = ({ title, price, pictureUrl, count }) => {
  return (
    <Grid.Container>
      <Row>
        <Card.Header css={{ mw: "125px" }}>
          <Card.Image width={100} height={100} src={pictureUrl} alt={title} />
        </Card.Header>
        <Card.Body>
          <Row>
            <Text css={{margin:"0 5px"}} h4>{title}</Text>
            <Text css={{margin:"0 5px"}} h5>{formatPrice(price)}</Text>
            <Text css={{margin:"0 5px"}} h6>Cantindad: {count}</Text>
          </Row>
        </Card.Body>
      </Row>
    </Grid.Container>
  );
};
