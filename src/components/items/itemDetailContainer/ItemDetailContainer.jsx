import { useEffect, useState } from "react"
import { ItemDetail } from "../itemDetail/ItemDetail";
import { getFetch } from "./../../../helpers/getFetch"

export const ItemDetailContainer =()=> {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFetch
          .then((response) => setProduct(response.find((product) => product.id === 3)))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
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