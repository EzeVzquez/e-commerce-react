import { Button, Col, Grid, Input, Spacer } from "@nextui-org/react";
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
      <Grid.Container>
        <Grid>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(dataForm);
          }}
        >
          <Input
            type="text"
            name="name"
            placeholder="nombre"
            label="Nombre:"
            value={dataForm.name}
            onChange={handleChange}
          />
          <Spacer y={0.5}/>
          <Input
            type="text"
            name="phone"
            placeholder="tel"
            label="Telefono:"
            value={dataForm.phone}
            onChange={handleChange}
          />
           <Spacer y={0.5}/>
          <Input
            type="email"
            name="email"
            placeholder="email"
            label="Email:"
            value={dataForm.email}
            onChange={handleChange}
          />
           <Spacer y={1}/>
          <Button css={{ background: "#DDA9F9", marginRight: "$5" }}>
            Finalizar compra
          </Button>
        </form>
          </Grid>
      </Grid.Container>
  );
};
