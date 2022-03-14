import "./ItemList.css";
import { getFetch } from "../../../helpers/getFetch";
import { useEffect, useState } from "react";
import { Item } from "../item/Item";
import { useParams } from "react-router-dom";
import { Grid, Loading } from "@nextui-org/react";

export const ItemList = () => {
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

  return (
    <Grid.Container justify="center" css={{ margin: "30px 0px" }}>
      {loading ? (
        <Loading size="xl" color="secondary" textColor="secondary">
          Cargando...
        </Loading>
      ) : (
        products.map((product) => <Item key={product.id} {...product} />)
      )}
    </Grid.Container>
  );
};
