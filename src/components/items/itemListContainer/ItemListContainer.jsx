import React from "react";

import ItemCount from "../itemCount/ItemCount";

import "./ItemListContainer.css";

const ItemListContainer = ({ saludar }) => {

  const onAdd = (count) => {
    console.log(`Se agrego ${count} al carro` );
  }

  return (
    <div>
      <ItemCount stock={10} initial={1} onAdd={onAdd} ></ItemCount>
      <p>{saludar}</p>
    </div>
  );
};

export default ItemListContainer;
