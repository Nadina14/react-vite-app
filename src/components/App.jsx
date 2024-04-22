import React, {useState} from "react";
import Header from "./Header";
import CartInfo from "./Shop/CartInfo";
import ShopList from "./Shop/ShopList";
import {ShopContextProvider} from "../context/ShopContext";

function App() {
  
  return (
    <ShopContextProvider>
      <Header />
      <main>
        <ShopList />
        <CartInfo />
      </main>
      <footer>&copy; DIGITAZON</footer>
    </ShopContextProvider>
  )
}

export default App;