import { Button, Grid, Input, Spacer, Text } from "@nextui-org/react";
import { useForm } from "react-hook-form";

export const CartForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  

  return (
    <Grid.Container>
      <Grid>
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            type="text"
            {...register("name", {required:"Campo requerido."})}
            placeholder="nombre"
            label="Nombre:"
          />
          <Text>{errors.name?.message}</Text>
          <Spacer y={0.5} />
          <Input
            type="phone"
            {...register("phone", {required:"Campo requerido."})}
            placeholder="tel"
            label="Telefono:"
          />
          <Text>{errors.phone?.message}</Text>
          <Spacer y={0.5} />
          <Input
            type="email"
            {...register("email", {required:"Campo requerido."})}
            placeholder="email"
            label="Email:"
          />
          <Text>{errors.email?.message}</Text>
          <Spacer y={1} />
          <Button
            type="submit"
            name="finalizar compra"  
            css={{background: "#DDA9F9"}}
          >Finalizar Compra</Button>
        </form>
      </Grid>
    </Grid.Container>
  );
};
