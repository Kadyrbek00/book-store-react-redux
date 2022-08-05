import React from "react";
import classes from "./app.module.scss";
import { Routes, Route } from "react-router-dom";
import { CartPage, HomePage } from "../pages";
import ShopHeader from "../shop-header";

const App = () => {
  return (
    <main className="container">
      <ShopHeader numItems={5} total={20} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </main>
  );
};

export default App;
