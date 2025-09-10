import "./styles/app.css";
import { Header } from "./components/Header";
import { Routes, Route } from 'react-router-dom';
import { Products } from "./components/Products";
import { Footer } from "./components/Footer";
import { News } from "./components/News";
import { Promotions } from "./components/Promotions";
import { Work } from "./components/Work";
import { useState } from "react";
import type { products } from "./types/types";

function App() {
  const [carList, setCarList] = useState<products[]>([]);

  const addToCart = (product: products) => {
    setCarList([...carList, product]);
  };

  return (
    <div className="app-container">
      <Header carList={carList} setCarList={setCarList} />
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/work" element={<Work />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
