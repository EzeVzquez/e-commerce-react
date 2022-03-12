import React from "react";
import "./App.css";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./pages/itemDetailContainer/ItemDetailContainer";
import { CartContainer } from "./pages/cartContainer/CartContainer";

function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
        {/* header */}
        <NavBar />
        <Routes>
          {/* body */}
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:catId" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CartContainer />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;
