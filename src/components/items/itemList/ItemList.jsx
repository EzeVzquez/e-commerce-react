import { getFetch } from "../../../helpers/getFetch";
import { useEffect, useState } from "react";
import { Item } from "../item/Item";

import "./ItemList.css"
import { useParams } from "react-router-dom";

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { catId } = useParams()

  useEffect(() => {
  if(catId){
      getFetch
        .then((response) => setProducts(response.filter(product => product.category === catId)))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
      }else{
        getFetch
        .then((response) => setProducts(response))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
      }
    }, [catId]);


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
