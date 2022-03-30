import { Col, Grid } from "@nextui-org/react";
import { Cart } from "../Cart";

export const CartListWrapper = ({ cartList, deleteItem }) => {
  return (
    <Grid.Container css={{ margin: "20px" }}>
      <Col>
        {cartList.map((product) => (
          <div key={product.id}>
            <Cart
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              count={product.cantidad}
              onDelete={deleteItem}
              totalItem={product.cantidad * product.price}
            ></Cart>
          </div>
        ))}
      </Col>
    </Grid.Container>
  );
};
