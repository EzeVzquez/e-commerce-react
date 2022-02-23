import React from "react";

import NavLink from "./navLink/Navlink";

import "./navBar.css";
import CartWidget from "../cart/cartWidget/CartWidget";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <a href="/" className="nav-logo">
          <h1>Logo</h1>
        </a>
        <ul className="nav-menu">
          <div className="li-container">
            <NavLink text={"Inicio"} />
            <NavLink
              text={
                "Categorias"
              } /*icon= {<i className="fas fa-caret-down" />}*/
            />
            <NavLink text={"Nosotros"} />
            <NavLink text={"Contacto"} />
          </div>
          <div className="li-container">
            <NavLink text={"Carrito"} icon={<CartWidget />} />
            <NavLink
              text={"Iniciar sesion"}
              icon={<i className="fa-solid fa-user" />}
            />
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
