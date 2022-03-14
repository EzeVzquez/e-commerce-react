import { useState } from "react";
import { Button, Grid, Text, Col } from "@nextui-org/react";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const agregar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const quitar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <Grid.Container css={{ mw: "300px" }}>
      <Grid>
        <Col>
          <Grid.Container justify="center" css={{ margin: "4px" }}>
            <Text size={15} weight="medium">
              Cantidad: {count}
            </Text>
            <Text size={15} weight="thin">
              (disponible: {stock})
            </Text>
          </Grid.Container>
          <Grid.Container justify="center">
            <Button
              css={{
                background: "$purple500",
                padding: "20px 30px",
                margin: "8px",
              }}
              auto
              rounded
              title="Agregar"
              disabled={count === stock}
              onClick={agregar}
            >
              <Text
                transform="uppercase"
                size={20}
                weight="bold"
                css={{ color: "$purple200" }}
              >
                +
              </Text>
            </Button>
            <Button
              css={{
                background: "$purple200",
                padding: "20px 30px",
                margin: "0 8px",
              }}
              auto
              rounded
              title="Quitar"
              disabled={count === 1}
              onClick={quitar}
            >
              <Text
                transform="uppercase"
                size={20}
                weight="bold"
                css={{ color: "$purple500" }}
              >
                -
              </Text>
            </Button>
          </Grid.Container>
          <Grid.Container justify="center">
            <Button
              css={{
                background: "$purple100",
                padding: "20px 30px",
                margin: "5px",
              }}
              size="xs"
              rounded
              title="Agregar al carrito"
              onClick={() => onAdd(count)}
            >
              <Text
                transform="uppercase"
                size={12}
                weight="medium"
                css={{ color: "$purple600" }}
              >
                Agregar al carrito
              </Text>
            </Button>
          </Grid.Container>
        </Col>
      </Grid>
    </Grid.Container>
  );
};
