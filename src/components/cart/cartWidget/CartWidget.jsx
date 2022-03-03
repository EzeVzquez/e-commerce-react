import React from "react";

import CartIcon from "../../../assets/svg/cartIcon/CartIcon";

import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="cart-container">
      <CartIcon className="navbar__cart-icon" />
    </div>
  );
};

export default CartWidget;
