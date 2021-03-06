import { Button, Container, Input, Spacer, Text } from "@nextui-org/react";
import { useForm } from "react-hook-form";

export const CartForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Container display="flex" fluid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
        fullWidth
          type="text"
          {...register("name", { required: "Campo requerido." })}
          placeholder="Juan Carlos"
          label="Nombre:"
        />
        <Text>{errors.name?.message}</Text>
        <Spacer y={0.5} />
        <Input
        fullWidth
          type="phone"
          {...register("phone", { required: "Campo requerido." })}
          placeholder="11999000"
          label="Teléfono:"
        />
        <Text>{errors.phone?.message}</Text>
        <Spacer y={0.5} />
        <Input
        fullWidth
          type="email"
          {...register("email", { required: "Campo requerido." })}
          placeholder="spinner@example.com"
          label="Email:"
        />
        <Text>{errors.email?.message}</Text>
        <Spacer y={1} />
        <Button
        
          type="submit"
          name="finalizar compra"
          css={{ background: "#DDA9F9" }}
        >
          Finalizar Compra
        </Button>
      </form>
    </Container>
  );
};
