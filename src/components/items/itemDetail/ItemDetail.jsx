import "./ItemDetail.css"
import ItemCount from "../itemCount/ItemCount";
import { formatPrice } from "../../../helpers/formatPrice";
import { onAdd } from "../../../helpers/onAdd";
import { useParams } from "react-router-dom";

export const ItemDetail = ({ title, stock, price, pictureUrl, description }) => {
  
  return (
    <div className="itemDetail-container">
      <div className="itemDetail-img--container">
        <img className="ItemDetail-img" src={pictureUrl} alt={title} />
      </div>
      <div className="itemDetail-detail">
        <h2 className="itemDetail-detail--title">{title}</h2>
        <p className="itemDetail-detail--text itemDetail-detail--description">{description}</p>
        <p className="itemDetail-detail--text itemDetail-detail--stock">En stock:{stock}</p>
        <h3 className="itemDetail-detail--price">{formatPrice(price)}</h3>
        <ItemCount stock={stock} initial={1} onAdd={onAdd} />
      </div>
    </div>
  );
};
