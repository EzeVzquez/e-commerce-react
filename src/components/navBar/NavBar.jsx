import "./navBar.css";
import { Container, Row, Col } from "@nextui-org/react";
import { NavBarLink } from "./navBarLink/NavBarLink";
import { CartWidget } from "../cart/cartWidget/CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Container css={{ background: "$purple200" }} fluid>
      <Row>
        <Link to={"/"}>
          <p>Logo</p>
        </Link>
        <Link to={"/"}>
          <NavBarLink text={"Inicio"} />
        </Link>
        <Link to={"/categoria/tecnologia"}>
          <NavBarLink text={"Tecnologia"} />
        </Link>
        <Link to={"/categoria/hogar"}>
          <NavBarLink text={"Hogar"} />
        </Link>
        <Link to={"/nosotros"}>
          <NavBarLink text={"Nosotros"} />
        </Link>
        <Link to={"/contacto"}>
          <NavBarLink text={"Contacto"} />
        </Link>
        <Link to={"/carrito"}>
          <NavBarLink text={"Carrito"} icon={<CartWidget />} />
        </Link>
      </Row>
    </Container>
  );
};
