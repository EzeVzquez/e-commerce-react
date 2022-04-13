import "./CartCard.css";
import { formatPrice } from "../../../helpers/formatPrice";

export const Cart = ({
  id,
  title,
  image,
  count,
  onDelete,
  totalItem,
}) => {
  return (
    <div className="cart-container">
      <div className="cart-img_container">
        <img className="cart-img" src={image} alt={title} />
        <p className="cart-delete_button" onClick={() => onDelete(id)}>
          Eliminar
        </p>
      </div>
      <div className="cart-detail">
        <p className="cart-text cart-detail_text--title">{title}</p>
        <p className="cart-text cart-detail_text--count">cantidad: {count}</p>
      </div>
      <div className="cart-price">
        <p className="cart-text cart-price_text">{formatPrice(totalItem)}</p>
      </div>
    </div>
  );
};
