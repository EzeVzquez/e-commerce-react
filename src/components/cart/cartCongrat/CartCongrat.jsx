import { Button, Grid, Text } from "@nextui-org/react";
import { Link } from "react-router-dom";

export const CartCongrat = ({ id }) => {
  return (
    <Grid.Container alignContent="center" direction="column">
      <Text css={{ marginBottom: "20px", marginTop:"20px" }} h2>
        Gracias por su compra!
      </Text>
      <Text
        css={{ marginBottom: "20px", textAlign: "center" }}
        weight="semibold"
      >
        Su id de compra es: {id}
      </Text>
      <Link to={`/`}>
        <Button
          css={{ width: "20px", margin: "auto", background: "$purple500" }}
        >
          Volver al inicio
        </Button>
      </Link>
    </Grid.Container>
  );
};
