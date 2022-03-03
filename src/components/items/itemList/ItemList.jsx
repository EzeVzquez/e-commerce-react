import { getFetch } from "../../../helpers/getFetch";
import { useEffect, useState } from "react";
import { Item } from "../item/Item";

import "./ItemList.css"

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch
      .then((response) => setProducts(response))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        products.map((product) => <Item key={product.id} {...product} />)
      )}
    </>
  );
};

export default ItemList;
