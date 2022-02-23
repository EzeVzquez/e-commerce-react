import React from "react";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer saludar="Hola Soy ItemListContainer" />
    </div>
  );
}

export default App;
