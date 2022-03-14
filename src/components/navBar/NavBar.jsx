import { Row, Grid, Text } from "@nextui-org/react";
import { CartWidget } from "../cart/cartWidget/CartWidget";
import { Link } from "react-router-dom";
import { DropDown } from "../dropDown/DropDown";

export const NavBar = () => {
  
  return (
    <Grid.Container
      css={{ background: "$purple300" }}
      xl
      justify="space-between"
    >
      <Grid css={{ padding: "15px" }}>
        <Link to={"/"}>
          <Text size={20} weight="medium">
            LOGO
          </Text>
        </Link>
      </Grid>
      <Grid css={{ padding: "15px" }}>
        <Row>
          <Link to={"/"}>
            <Text
              css={{ padding: "0 20px" }}
              color="$gray200"
              weight="semibold"
            >
              Inicio
            </Text>
          </Link>
          <DropDown />
          <Link to={"/nosotros"}>
            <Text
              css={{ padding: "0 20px" }}
              color="$gray200"
              weight="semibold"
            >
              Nosotros
            </Text>
          </Link>
          <Link to={"/contacto"}>
            <Text
              css={{ padding: "0 20px" }}
              color="$gray200"
              weight="semibold"
            >
              Contacto
            </Text>
          </Link>
        </Row>
      </Grid>
      <Grid css={{ padding: "15px" }}>
        <Row>
          <Link to={"/carrito"}>
            <CartWidget />
          </Link>
        </Row>
      </Grid>
    </Grid.Container>
  );
};
