import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Item = ({ producto }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">
      <h3>{producto.nombre}</h3>
      <p>${producto.precio}</p>
      {producto.imagen && (
        <img src={producto.imagen} alt={producto.nombre} style={{ width: "150px" }} />
      )}
      <button onClick={() => addToCart(producto)}>Agregar al carrito</button>
    </div>
  );
};

export default Item;
