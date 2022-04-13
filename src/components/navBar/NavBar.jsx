import "./NavBar.css";
import { useState } from "react";
import { CartWidget } from "../cart/cartWidget/CartWidget";
import { Link } from "react-router-dom";
import { HamburgerMenuIcon } from "./../../assets/svg/hamburgerMenuIcon/HamburgerMenuIcon";
import { CloseIcon } from "./../../assets/svg/closeIcon/CloseIcon";
import { NavBarMenu } from "./navBarMenu/NavBarMenu";

export const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="nav-container">
      <div className="nav-wrapper">
        <div
          className="nav-mobile_container"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <CloseIcon /> : <HamburgerMenuIcon />}
        </div>

        <div className="nav-logo_container nav-logo-cart_container">
          <Link to={"/"}>
            <div className="nav-logo">
              <p className="nav-text nav-text--logo">TecHome</p>
            </div>
          </Link>
        </div>
        {mobileMenu ? (
          <NavBarMenu
            classname="nav-menu"
            onClickHide={ ()=> setMobileMenu(!mobileMenu)}
          />
        ) : (
          <NavBarMenu
            classname="nav-menu nav-menu-hide"
            onClickHide={ ()=> setMobileMenu(!mobileMenu)}
          />
        )}

        <div className="nav-cart_container nav-logo-cart_container">
          <Link to={"/carrito"}>
            <div className="nav-cart">
              <CartWidget />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
