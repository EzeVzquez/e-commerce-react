import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./../../components/items/itemDetail/ItemDetail";
import { getProduct } from "./../../helpers/getFetch";
import { Grid, Loading } from "@nextui-org/react";

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
