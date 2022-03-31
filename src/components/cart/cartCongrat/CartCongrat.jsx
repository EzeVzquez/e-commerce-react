import { Col, Grid, Text } from "@nextui-org/react";

export const CartCongrat = ({ id }) => {
  return (
    <Grid.Container  alignContent="center" direction="column">
      <Text h2>Gracias por su compra!</Text>
      <Text weight="semibold">Su id de compra es: {id}</Text>
    </Grid.Container>
  );
};
