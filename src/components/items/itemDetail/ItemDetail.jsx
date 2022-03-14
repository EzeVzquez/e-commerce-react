import { Card, Grid, Row, Text } from "@nextui-org/react";
import { onAdd } from "../../../helpers/onAdd";
import { ItemCount } from "../itemCount/ItemCount";
import { formatPrice } from "../../../helpers/formatPrice";

export const ItemDetail = ({
  title,
  stock,
  price,
  pictureUrl,
  description,
}) => {
  return (
    <Grid.Container justify="flex-start">
      <Row>
        <Card.Header css={{ mw: "600px" }}>
          <Card.Image width={500} height={500} src={pictureUrl} alt={title} />
        </Card.Header>
        <Card.Body>
          <Grid css={{ margin: "20px" }}>
            <Text h2>{title}</Text>
          </Grid>
          <Grid css={{ margin: "20px" }}>
            <Text>{description}</Text>
          </Grid>
          <Grid css={{ margin: "20px" }}>
            <Text h3>{formatPrice(price)}</Text>
          </Grid>
          <Grid css={{ margin: "50px 20px" }}>
            <ItemCount stock={stock} initial={1} onAdd={onAdd} />
          </Grid>
        </Card.Body>
      </Row>
    </Grid.Container>
  );
};
