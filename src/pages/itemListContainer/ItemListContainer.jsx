import { ItemList } from "./../../components/items/itemList/ItemList";
import { Grid, Loading } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { getFetch } from "../../helpers/getFetch";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore"

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { catId } = useParams();

  useEffect(() => {
    if (catId) {
      getFetch
        .then((response) =>
          setProducts(response.filter((product) => product.category === catId))
        )
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    } else {
      getFetch
        .then((response) => setProducts(response))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }
  }, [catId]);

  // useEffect(()=> {
  //   const db = getFirestore()
  //   const queryDb = doc(db,"items", "id")
  //   getDoc(queryDb)
  //   .then(response => console.log(response))
  // })

  return (
    <Grid.Container justify="center" css={{ margin: "30px 0px" }}>
      {loading ? (
        <Loading size="xl" color="secondary" textColor="secondary">
          Cargando...
        </Loading>
      ) : (
        <ItemList products={products} />
      )}
    </Grid.Container>
  );
};
