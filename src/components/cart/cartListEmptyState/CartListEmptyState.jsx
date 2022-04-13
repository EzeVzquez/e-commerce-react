import { Button, Grid, Text } from "@nextui-org/react";
import { Link } from "react-router-dom";

export const CartListEmptyState = () => {
  return (
    <>
      <Grid.Container alignContent="center" direction="column">
        <Text css={{ margin: "20px" }} h2>
          El carrito se encuentra vacío
        </Text>
        <Link to={`/`}>
          <Button
            css={{ width: "20px", margin: "auto", background: "$purple500" }}
          >
            Volver al inicio
          </Button>
        </Link>
      </Grid.Container>
    </>
  );
};
