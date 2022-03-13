import "./CartWidget.css";
import { CartIcon } from "../../../assets/svg/cartIcon/CartIcon";

export const CartWidget = () => {
  return (
    <div className="cart-container">
      <CartIcon className="navbar__cart-icon" />
    </div>
  );
};
