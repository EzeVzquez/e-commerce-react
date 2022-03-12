import { Link } from "react-router-dom";
import { formatPrice } from "../../../helpers/formatPrice";
import "./Item.css";

export const Item = ({id, title, stock, price, pictureUrl, description }) => {
  return (
    <div className="item-container">
      <h3 className="item-title">{title}</h3>
      <img className="item-img" src={pictureUrl} alt={title} />
      <p className="item-price">{formatPrice(price)}</p>
      <Link to={`/detalle/${id}`}>
        <button className="item-button">Ver detalles</button>
      </Link>
      <p className="item-stock"> Stock disponible:{stock}</p>
      <p className="item-description">Descripcion:{description}</p>
    </div>
  );
};
