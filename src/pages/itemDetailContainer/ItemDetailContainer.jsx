import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./../../components/items/itemDetail/ItemDetail";
import { Grid } from "@nextui-org/react";
import { doc, getFirestore, getDoc } from "firebase/firestore";
import { Loading } from "../../components/loading/Loading";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryDb = doc(db, "products", id);
    getDoc(queryDb)
      .then((response) => setProduct({ id: response.id, ...response.data() }))
      .finally(() => setLoading(false));
  }, [id]);

  return loading ? (
    <>
    <Loading />
    </>
  ) : (
    <Grid.Container justify="center" css={{ margin: "30px 0px" }}>
      <ItemDetail {...product} />
    </Grid.Container>
  );
};
