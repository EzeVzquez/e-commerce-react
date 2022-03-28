import { Link } from "react-router-dom";
import { formatPrice } from "../../../helpers/formatPrice";
import { Button, Card, Col, Grid, Row, Text } from "@nextui-org/react";

export const Item = ({ id, title, stock, price, image, description }) => {
  return (
    <Grid.Container gap={2} css={{ width: "400px" }}>
      <Grid>
        <Card cover css={{ mw: "100%" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text
                color="#1B1C1E"
                size={20}
                weight="bold"
                transform="uppercase"
              >
                {title}
              </Text>
            </Col>
          </Card.Header>
          <Card.Body>
            <Card.Image
              src={image}
              height="100%"
              width="100%"
              alt={title}
            />
          </Card.Body>
          <Card.Footer
            blur
            css={{
              position: "absolute",
              bgBlur: "#f1f1f1",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Col>
              <Text color="#1B1C1E" size={20}>
                {formatPrice(price)}
              </Text>
              <Text color="#1B1C1E" size={16}>
                En stock: {stock}
              </Text>
              <Text color="#1B1C1E" size={12}>
                Descripcion: {description}
              </Text>
            </Col>
            <Row justify="flex-end">
              <Link to={`/detalle/${id}`}>
                <Button css={{ background: "$purple100" }} auto rounded>
                  <Text
                    css={{ color: "$purple800" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Ver detalles
                  </Text>
                </Button>
              </Link>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </Grid.Container>
  );
};
