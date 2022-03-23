import { Button, Card, Grid, Row, Text } from "@nextui-org/react";
import { formatPrice } from "../../helpers/formatPrice";


export const Cart = ({id, title, price, pictureUrl, count, onDelete, totalItem }) => {

  return (
    <Grid.Container>
      <Row>
        <Card.Header css={{ mw: "125px" }}>
          <Card.Image width={100} height={100} src={pictureUrl} alt={title} />
        </Card.Header>
        <Card.Body>
          <Row>
            <Text css={{margin:"0 5px"}} h4>{title}</Text>
            <Text css={{margin:"0 5px"}} h5>{formatPrice(price)}</Text>
            <Text css={{margin:"0 5px"}} h6>Cantindad: {count}</Text>
            <Button size={"sm"} css={{background:"#461491"}} onClick={ ()=> onDelete(id)}>Borrar</Button>
            <Text h3>{formatPrice(totalItem)}</Text> 
          </Row>
        </Card.Body>
      </Row>
    </Grid.Container>
  );
};
