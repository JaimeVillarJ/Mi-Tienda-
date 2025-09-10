import { Link } from "react-router-dom";
import { FaShoppingCart, FaTrash, FaArrowUp } from "react-icons/fa";
import "../styles/header.css";
import { useState } from "react";
import type { products } from "../types/types";

type HeaderProps = {
  carList: products[];
  setCarList: React.Dispatch<React.SetStateAction<products[]>>; // ✅ recibimos el setter del App
};

export const Header = ({ carList, setCarList }: HeaderProps) => {
  const [openCart, setOpenCart] = useState(false);

  // 🔹 Eliminar producto individual
  const removeItem = (index: number) => {
    setCarList(carList.filter((_, i) => i !== index));
  };

  // 🔹 Vaciar carrito
  const clearCart = () => {
    setCarList([]);
  };

  // 🔹 Subir pedido
  const submitOrder = () => {
    if (carList.length === 0) {
      alert("⚠️ Tu carrito está vacío");
      return;
    }
    setCarList([]);
    alert("✅ Pedido exitoso");
  };

  // 🔹 Calcular total
  const total = carList.reduce((acc, item) => acc + Number(item.price), 0);

  return (
    <div className="header-container">
      <div className="header-title-container">
        <h1>MI TIENDA PERSONAL</h1>
      </div>
      <ul className="ul-container">
        <li><Link to="/" >LO NUEVO</Link></li>
        <li><Link to="/products" >PRODUCTOS</Link></li>
        <li><Link to="/promotions" >PROMOCIONES</Link></li>
        <li><Link to="/work" >BUSCAS TRABAJO</Link></li>
        <button 
          className="shoppingCar" 
          onClick={() => setOpenCart(!openCart)}
        >
          <FaShoppingCart />
          {carList.length > 0 && <span className="cart-count">{carList.length}</span>}
        </button>
      </ul>

      {/* 🔹 Mini menú del carrito */}
      {openCart && (
        <div className="cart-menu">
          <h3>🛒 Tu carrito</h3>
          {carList.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            <>
              <ul>
                {carList.map((item, i) => (
                  <li key={i}>
                    <img src={item.link} alt={item.name} />
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                    <button onClick={() => removeItem(i)} className="remove-btn">
                      <FaTrash />
                    </button>
                  </li>
                ))}
              </ul>
              <div className="cart-footer">
                <p><strong>Total:</strong> ${total.toFixed(2)}</p>
                <div className="cart-buttons">
                  <button onClick={clearCart} className="clear-btn">
                    Vaciar carrito
                  </button>
                  <button onClick={submitOrder} className="submit-btn">
                    <FaArrowUp /> Subir pedido
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
