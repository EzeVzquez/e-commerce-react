import { Card, Grid, Row, Text, Button } from "@nextui-org/react";
import { ItemCount } from "../itemCount/ItemCount";
import { formatPrice } from "../../../helpers/formatPrice";
import { useState } from "react";
import { Link } from "react-router-dom";

export const ItemDetail = ({
  title,
  stock,
  price,
  pictureUrl,
  description,
}) => {
  const [buy, setBuy] = useState(false);

  const onAdd = (count) => setBuy(true);
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
            {buy && (
              <Link to={"/carrito"}>
                <Button
                  css={{
                    background: "$purple100",
                    padding: "20px 30px",
                    margin: "5px",
                  }}
                  size="xs"
                  rounded
                  title="Agregar al carrito"
                >
                  <Text
                    transform="uppercase"
                    size={12}
                    weight="medium"
                    css={{ color: "$purple600" }}
                  >
                    Ir al carrito
                  </Text>
                </Button>
              </Link>
            )}
            {!buy && <ItemCount stock={stock} initial={1} onAdd={onAdd} />}
          </Grid>
        </Card.Body>
      </Row>
    </Grid.Container>
  );
};
