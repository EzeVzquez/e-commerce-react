import "./Loading.css"
import { Container, Loading as Loader } from "@nextui-org/react";

export const Loading = () => {
 return(
  <div className="loader-container">
    <Loader 

      size="xl"
      color="secondary"
      textColor="secondary"
    >
      Cargando...
    </Loader>
  </div>
 )
};
