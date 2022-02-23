import React from "react";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <header>
      <NavBar />
      </header>
      <body>
      <ItemListContainer saludar="Hola Soy ItemListContainer" />  
      </body>
    </div>
  );
}

export default App;
