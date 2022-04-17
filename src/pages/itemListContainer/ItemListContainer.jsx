import { ItemList } from "./../../components/items/itemList/ItemList";
import { Grid } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/loading/Loading";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { catId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryColection = collection(db, "products");
    const queryFilter = catId
      ? query(queryColection, where("category", "==", catId))
      : queryColection;
    getDocs(queryFilter)
      .then((response) =>
        setProducts(
          response.docs.map((item) => ({ id: item.id, ...item.data() }))
        )
      )
      .finally(() => setLoading(false));
  }, [catId]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Grid.Container justify="center" css={{ margin: "30px 0px" }}>
          <ItemList products={products} />
        </Grid.Container>
      )}
    </>
  );
};
