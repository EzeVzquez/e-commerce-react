import { NextUIProvider } from "@nextui-org/react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { NavBar } from "./components/navBar/NavBar";
import { ItemListContainer } from "./pages/itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./pages/itemDetailContainer/ItemDetailContainer";
import { CartContainer } from "./pages/cartContainer/CartContainer";
import { AboutUsContainer } from "./pages/aboutUsContainer/AboutUsContainer";
import { ContactContainer } from "./pages/contactContainer/ContactContainer";
import { CartContextProvider } from "./context/cartContext/CartContext";

function App() {
  return (
    <CartContextProvider>
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
            <Route path="/nosotros" element={<AboutUsContainer />} />
            <Route path="/contacto" element={<ContactContainer />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </NextUIProvider>
    </CartContextProvider>
  );
}

export default App;
