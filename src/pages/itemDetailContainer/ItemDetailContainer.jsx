import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./../../components/items/itemDetail/ItemDetail";
import { Grid, Loading } from "@nextui-org/react";
import {doc, getFirestore, getDoc} from 'firebase/firestore'

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore()
    const queryDb = doc(db, 'products', id)
    getDoc(queryDb)
    .then(response => setProduct({id: response.id, ...response.data()}))
    .finally(() => setLoading(false))
  },[id])

  return (
    <Grid.Container justify="center" css={{ margin: "30px 0px" }}>
      {loading ? (
        <Loading size="xl" color="secondary" textColor="secondary">
          Cargando...
        </Loading>
      ) : (
        <ItemDetail {...product} />
      )}
    </Grid.Container>
  );
};
