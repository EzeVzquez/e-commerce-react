import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./../../components/items/itemDetail/ItemDetail";
import { getProduct } from "./../../helpers/getFetch";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getProduct(id)
      .then((product) => setProduct(product))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [id]);
  return (
    <div>{loading ? <h1>Cargando...</h1> : <ItemDetail {...product} />}</div>
  );
};
