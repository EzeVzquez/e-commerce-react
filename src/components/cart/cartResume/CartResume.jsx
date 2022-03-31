import { formatPrice } from "../../../helpers/formatPrice"
import { Button, Text } from "@nextui-org/react"


export const CartResume =({clearCart, totalPrice})=> {
    return(
        <>
        <Text h3>Cantidad Total a pagar:{formatPrice(totalPrice)}</Text>
        <Button
          css={{ background: "#1c0631", marginLeft: "$5" }}
          onClick={clearCart}
        >
          Borrar todo
        </Button>
        </>
    )
}