import { Button, Card, Grid, Row, Text } from "@nextui-org/react";
import { formatPrice } from "../../../helpers/formatPrice";

export const Cart = ({
  id,
  title,
  price,
  image,
  count,
  onDelete,
  totalItem,
}) => {
  return (
    <Grid.Container>
      <Row>
        <Card.Header css={{ mw: "125px" }}>
          <Card.Image width={100} height={100} src={image} alt={title} />
        </Card.Header>
        <Card.Body>
          <Row>
            <Text css={{ margin: "0 5px" }} h4>
              {title}
            </Text>
            <Text css={{ margin: "0 5px" }} h5>
              {formatPrice(price)}
            </Text>
            <Text css={{ margin: "0 5px" }} h6>
              Cantindad: {count}
            </Text>
            <Button
              size="200px"
              css={{ background: "none", color:"$black", margin:"0 20px" }}
              onClick={() => onDelete(id)}
            >
              X
            </Button>
          </Row>
            <Text h4>{formatPrice(totalItem)}</Text>
        </Card.Body>
      </Row>
    </Grid.Container>
  );
};
