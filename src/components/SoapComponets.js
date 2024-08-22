import React, { useContext } from "react";
import "../components/soapcomponents.css";
import { CartContext } from "./Cart/CartContex"; // Importa correctamente CartContext

export default function SoapComponets(product) {
  const { addItemToCart } = useContext(CartContext);
  const imageUrl = require(`../image/${product.carpet}/${product.imagen}.png`);

  return (
    <div className="conteiner-soap">
      <div className="container">
        <img src={imageUrl} alt={product.name} />
        <div className="capa">
          <p className="text-description">{product.description}</p>
        </div>
      </div>
      <div className="boton-price">
        <nav>{product.name}</nav>
        <button onClick={() => console.log("agregando al carrito")}>
        
          {/* // addItemToCart(product) */}
          {product.price}
        </button>
      </div>
    </div>
  );
}

