import React from "react";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/items/itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/items/itemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div>
      {/* header */}
      <NavBar />
      {/* body */}
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
