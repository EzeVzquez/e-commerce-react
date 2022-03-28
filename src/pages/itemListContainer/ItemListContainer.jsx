import { ItemList } from "./../../components/items/itemList/ItemList";
import { Grid, Loading } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore'

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { catId } = useParams();

  useEffect(() => {
    const db = getFirestore()
    if(catId){
    const queryColection = collection(db, "products")
    const queryFilter = query(queryColection, where('category', '==', catId))
    getDocs(queryFilter)
    .then(response => setProducts( response.docs.map(item => ( {id:item.id, ...item.data()} ))))
    .catch(error => console.log(error))
    .finally(() => setLoading(false));
    } else {
      const queryColection = collection(db, 'products')
      getDocs(queryColection)
      .then(response => setProducts(response.docs.map(item => ({id: item.id, ...item.data()}))))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
    }
  },[catId])

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
