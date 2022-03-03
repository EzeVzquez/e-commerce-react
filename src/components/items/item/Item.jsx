import { formatPrice } from "../../../helpers/formatPrice";
import ItemCount from "../itemCount/ItemCount";

import "./Item.css"

export const Item = ({ title, stock, price, pictureUrl }) => {
  const onAdd = (count) => {
    console.log(`Se agrego ${count} al carro`);
  };

  return (
    <div className="item-container">
      <h3>{title}</h3>
      <img className="item-img" src={pictureUrl} alt={title} />
      <p>{formatPrice(price)}</p>
      <button>Ver detalles</button>
      <p> Stock disponible:{stock}</p>
      <ItemCount stock={stock} initial={1} onAdd={onAdd} />
    </div>
  );
};
