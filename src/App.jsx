import React from "react";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/items/itemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      {/* header */}
      <NavBar />
      {/* body */}
      <ItemListContainer />
    </div>
  );
}

export default App;
