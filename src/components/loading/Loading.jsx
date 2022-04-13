import { Container, Loading as Loader } from "@nextui-org/react";

export const Loading = () => {
 return(
  <Container fluid display="flex"  justify="center" alignContent="center">
    <Loader 

      size="xl"
      color="secondary"
      textColor="secondary"
    >
      Cargando...
    </Loader>
  </Container>
 )
};
