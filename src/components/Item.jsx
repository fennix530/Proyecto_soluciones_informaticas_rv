import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Item = ({ producto, onDelete, onViewDetail }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card" style={{ padding: "1rem", margin: "1rem", border: "1px solid #ccc" }}>
      <h3>{producto.nombre}</h3>
      <p>Precio: ${producto.precio}</p>
      
      {producto.imagen && (
        <img 
          src={producto.imagen} 
          alt={producto.nombre} 
          style={{ width: "150px", marginBottom: "1rem" }} 
        />
      )}

      <button onClick={() => addToCart(producto)} style={{ backgroundColor: "green", color: "white", marginRight: "0.5rem" }}>
        🛒 Agregar al carrito
      </button>

      <button onClick={() => onViewDetail(producto)} style={{ backgroundColor: "blue", color: "white", marginRight: "0.5rem" }}>
        Ver detalle
      </button>

      <button onClick={() => onDelete(producto.id)} style={{ backgroundColor: "red", color: "white" }}>
        Eliminar
      </button>
    </div>
  );
};

export default Item;
