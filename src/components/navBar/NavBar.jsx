import React from "react";
import { Container, Row, Col } from '@nextui-org/react';
import NavLink from "./navLink/Navlink";
import CartWidget from "../cart/cartWidget/CartWidget";
import "./navBar.css";

const NavBar = () => {
  return (
    <Container css={{'background':'$purple200'}} fluid>
      <Row >
      <NavLink text={"Inicio"} />
      <NavLink text={"Categorias"} />
      <NavLink text={"Nosotros"} />
      <NavLink text={"Contacto"} />
      <NavLink text={"Carrito"} icon={<CartWidget />} />
      </Row>
    </Container>
  );
};

export default NavBar;
