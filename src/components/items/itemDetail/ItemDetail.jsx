import "./ItemDetail.css"
import { Card, Grid, Text, Button, Container, Spacer } from "@nextui-org/react";
import { ItemCount } from "../itemCount/ItemCount";
import { formatPrice } from "../../../helpers/formatPrice";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../context/cartContext/CartContext";

export const ItemDetail = (props) => {
  const { title, stock, price, image, description } = props;

  const [buy, setBuy] = useState(false);

  const { addCart } = useCartContext();

  const onAdd = (count) => {
    setBuy(true);
    addCart({ ...props, cantidad: count });
  };

  return (

    <section className="detail-container">
      <div className="detail-wrapper">
      <div className="detail-img_container">
        <p className="detail-title">{title}</p>
        <img className="detail-img" src={image} alt={title} />
      </div>
      <div className="detail-description_container">
        <p className="detail-description">Descripción: {description}</p>
        <p className="detail-price">{formatPrice(price)}</p>
        {buy && (
              <Container fluid margin="0">
                <Link to={"/carrito"}>
                  <Button
                  margin="0"
                    css={{
                      background: "$purple100",
                      padding: "20px 30px",
                      margin: "5px",
                    }}
                    size="xs"
                    rounded
                    title="Agregar al carrito"
                    >
                    <Text
                    margin="0"
                      transform="uppercase"
                      size={12}
                      weight="medium"
                      css={{ color: "$purple600" }}
                    >
                      Ir al carrito
                    </Text>
                  </Button>
                </Link>
                <Spacer y={1}/>
                <Link to={"/"}>
                  <Button
                    css={{
                      background: "$purple100",
                      padding: "20px 12px",
                      margin: "5px",
                    }}
                    size="xs"
                    rounded
                    title="Agregar al carrito"
                    >
                    <Text
                      transform="uppercase"
                      size={12}
                      weight="medium"
                      css={{ color: "$purple600" }}
                      >
                      Seguir comprando
                    </Text>
                  </Button>
                </Link>
              </Container>
            )}
        {!buy && <ItemCount stock={stock} initial={1} onAdd={onAdd} />}
      </div>
      </div>
    </section>
  );
};
