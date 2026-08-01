import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Male from "./pages/Male";
import Female from "./pages/Female";
import Cart from "./pages/cart";

function App() {

  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/collection" element={<Collection />} />

        <Route
          path="/male"
          element={
            <Male
              cart={cart}
              setCart={setCart}
            />
          }
        />

        <Route
          path="/female"
          element={
            <Female
              cart={cart}
              setCart={setCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;