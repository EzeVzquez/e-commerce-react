import { Button, Col, Input } from "@nextui-org/react";
import { useState } from "react";

export const CartForm = ({ onSubmit }) => {
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Col>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(dataForm);
          }}
        >
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
          <Button css={{ background: "#DDA9F9", marginRight: "$5" }}>
            Finalizar compra
          </Button>
        </form>
      </Col>
    </>
  );
};
