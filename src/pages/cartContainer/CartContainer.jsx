import { useCartContext } from "../../context/cartContext/CartContext";
import { Cart } from "../../components/cart/Cart";
import { Button, Col, Grid, Input, Text } from "@nextui-org/react";
import { formatPrice } from "../../helpers/formatPrice";
import { Link } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { CartListWrapper } from "../../components/cart/carList/cartList";

export const CartContainer = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [id, setid] = useState("");
  const { cartList, clearCart, deleteItem, totalPrice } = useCartContext();

  const clear = () => clearCart();

  const generateOrder = async (e) => {
    e.preventDefault();

    let order = {};

    order.buyer = dataForm;
    order.total = totalPrice();

    order.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const name = cartItem.name;
      const price = cartItem.price;

      return { id, name, price };
    });

    const db = getFirestore();
    const queryColletctionSet = collection(db, "orders");
    addDoc(queryColletctionSet, order)
      .then((response) => setid(response.id))
      .catch((error) => console.log(error))
      .finally(() => console.log("finalizo"));
  };

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {cartList.length === 0 ? (
        <Grid.Container alignContent="center" direction="column">
          <Text h2>El carrito se encuentra vacio :(</Text>
          <Link to={`/`}>
            <Button
              css={{ width: "20px", margin: "auto", background: "$purple500" }}
            >
              Volver al inicio
            </Button>
          </Link>
        </Grid.Container>
      ) : (
        <div>
        <CartListWrapper
        cartList={cartList}
        deleteItem={deleteItem}
        />
            <Text h3>Cantidad Total a pagar:{formatPrice(totalPrice)}</Text>


          <Button
            css={{ background: "#1c0631", marginLeft: "$5" }}
            onClick={clear}
          >
            Borrar todo
          </Button>
          <Col>
            <form onSubmit={generateOrder}>
              <Input
                type="text"
                name="name"
                placeholder="name"
                label="Nombre"
                value={dataForm.name}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="phone"
                placeholder="tel"
                label="Telefono"
                value={dataForm.phone}
                onChange={handleChange}
              />
              <Input
                type="email"
                name="email"
                placeholder="email"
                label="Email"
                value={dataForm.email}
                onChange={handleChange}
              />
              <Button
                onClick={() => {
                  generateOrder();
                }}
                css={{ background: "#DDA9F9", marginRight: "$5" }}
              >
                Finalizar compra
              </Button>
            </form>
          </Col>
        </div>
      )}
    </>
  );
};
