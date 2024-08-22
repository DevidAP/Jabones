import React from "react";
import "../components/soapcomponents.css";

export default function SoapComponets(product) {
  // Eliminar la línea que usa useContext
  // const { addItemToCart } = useContext(CartContext);

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
          {/* Si `addItemToCart` ya no se usa, simplemente quita la llamada */}
          {product.price}
        </button>
      </div>
    </div>
  );
}

