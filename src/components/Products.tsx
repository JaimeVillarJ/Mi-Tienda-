import axios from "axios";
import { useEffect, useState } from "react";
import type { products } from "../types/types";
import "../styles/products.css";

export const Products = ({ addToCart }: { addToCart: (product: products) => void }) => {
  const [products, setProducts] = useState<products[]>([]);
  const [chargeProducts, setChargeProducts] = useState(true);

  const API_LINK = import.meta.env.VITE_APP_API_LINK;

  useEffect(() => {
    axios
      .get(`${API_LINK}/api/products`)
      .then((response) => {
        setProducts(response.data);
        setChargeProducts(false);
      })
      .catch(() => {
        alert("❌ Error al cargar los productos");
        setChargeProducts(false);
      });
  }, []);

  return (
    <div>
      <h1 className="news-title">ENCUENTRA TODO LO QUE NECESITAS</h1>
      {chargeProducts ? (
        <p className="cargando">Cargando productos...</p>
      ) : (
        <div className="products-grid">
          {products.map((item) => (
            <div className="catalog-container" key={item.id}>
              <h2>{item.name}</h2>
              <img src={item.link} alt={item.name} />
              <p>{item.price}</p>
              <button className="add" onClick={() => addToCart(item)}>
                Agregar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
