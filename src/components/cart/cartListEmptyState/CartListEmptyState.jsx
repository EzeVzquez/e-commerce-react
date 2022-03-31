import { Button, Grid, Text } from "@nextui-org/react";
import { Link } from "react-router-dom";

export const CartListEmptyState = () => {
  return (
    <>
      <Grid.Container alignContent="center" direction="column">
        <Text h2>El carrito se encuentra vacio</Text>
        <Link to={`/`}>
          <Button
            css={{ width: "20px", margin: "auto", background: "$purple500" }}
          >
            Volver al inicio
          </Button>
        </Link>
      </Grid.Container>
    </>
)};
