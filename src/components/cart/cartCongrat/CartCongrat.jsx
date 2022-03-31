import { Grid, Text } from "@nextui-org/react";

export const CartCongrat = ({ id }) => {
  return (
    <Grid.Container>
      <Text>Gracias por su compra!</Text>
      <Text>Su id de compra es:{id}</Text>
    </Grid.Container>
  );
};
