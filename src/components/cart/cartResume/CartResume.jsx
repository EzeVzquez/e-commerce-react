import { formatPrice } from "../../../helpers/formatPrice"
import { Button, Col, Text } from "@nextui-org/react"


export const CartResume =({clearCart, totalPrice})=> {
    return(
        <>
        <Col>
        <Text h3>Cantidad Total a pagar:{formatPrice(totalPrice)}</Text>
        <Button
          size="sm"
          css={{ background: "#1c0631", marginLeft: "$5" }}
          onClick={clearCart}
        >
          Borrar todo
        </Button>
        </Col>
        </>
    )
}