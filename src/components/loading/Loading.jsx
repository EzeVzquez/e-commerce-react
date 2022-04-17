import "./Loading.css"
import { Loading as Loader } from "@nextui-org/react";

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
