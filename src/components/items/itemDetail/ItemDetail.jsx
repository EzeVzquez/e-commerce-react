import "./ItemDetail.css"
import { formatPrice } from "../../../helpers/formatPrice";

export const ItemDetail = ({ title, stock, price, pictureUrl, description }) => {
  return (
    <div className="itemDetail-container">
      <div className="itemDetail-img--container">
        <img className="ItemDetail-img" src={pictureUrl} alt={title} />
      </div>
      <div className="itemDetail-detail">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{stock}</p>
        <h3>{formatPrice(price)}</h3>
      </div>
    </div>
  );
};
