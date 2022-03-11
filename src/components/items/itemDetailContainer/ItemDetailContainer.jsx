import { useEffect, useState } from "react"
import { ItemDetail } from "../itemDetail/ItemDetail";
import { getProduct } from "./../../../helpers/getFetch"

export const ItemDetailContainer =()=> {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      getProduct(2)
          .then((product) => setProduct(product))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false))
    }, []);

      console.log(product);

    return (
        <div>
              {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <ItemDetail {...product} />)
      }
        </div>
    )
}