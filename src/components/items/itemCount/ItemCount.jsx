import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const agregar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const quitar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="count-container">
      <p className="count-text">Agregar al carrito:{count}</p>
      <div className="count-button-container">
        <button
          title="Agregar"
          className="count-button count-button__add"
          disabled={count === stock}
          onClick={agregar}
        >
          +
        </button>
        <button
          title="Quitar"
          className="count-button count-button__subtract"
          disabled={count === 0}
          onClick={quitar}
        >
          -
        </button>
      </div>
      <div className="button-cart__container">
        <button
          className="count-button count-button__cart"
          onClick={() => onAdd(count)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
