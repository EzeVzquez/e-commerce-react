import "./ItemListContainer.css";
import { ItemList } from "./../../components/items/itemList/ItemList";
import { Grid } from "@nextui-org/react";

export const ItemListContainer = () => {
  return (
    <Grid.Container >
      <ItemList />
    </Grid.Container>
  );
};
