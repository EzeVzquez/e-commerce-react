
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/items/itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/items/itemDetailContainer/ItemDetailContainer";
import { NextUIProvider } from '@nextui-org/react';

function App() {
  return (
    <NextUIProvider>
      {/* // <BrowserRouter> */}
     
        {/* header */}
        <NavBar />
        {/* <Routes> */}
        {/* body */}
        <ItemListContainer />
        <ItemDetailContainer />
        {/* <Route path='/' element={<ItemListContainer />} /> */}
        {/* <Route path='detail' element={<ItemDetailContainer />} /> */}
        {/* <Route path='/*' element={<Navigate to='/' replace />} /> */}
        {/* </Routes> */}
      {/* // </BrowserRouter> */}

    </NextUIProvider>
  );
}

export default App;
