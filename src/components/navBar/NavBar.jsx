import React from "react";
import { Container, Row, Col } from "@nextui-org/react";
import NavBarLink from "./navLink/Navlink";
import CartWidget from "../cart/cartWidget/CartWidget";
import "./navBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
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
        <NavBarLink text={"Nosotros"} />
        <NavBarLink text={"Contacto"} />
        <Link to={"/carrito"}>
          <NavBarLink text={"Carrito"} icon={<CartWidget />} />
        </Link>
      </Row>
    </Container>
  );
};

export default NavBar;
