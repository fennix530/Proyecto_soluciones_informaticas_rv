import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Item = ({ producto, onDelete, onViewDetail }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="producto-card">
      <h3>{producto.nombre}</h3>
      <p>Precio: ${producto.precio}</p>
      
      {producto.imagen && (
        <img 
          src={producto.imagen} 
          alt={producto.nombre} 
          style={{ width: "150px", marginBottom: "1rem" }} 
        />
      )}

      <button className="btn-add" onClick={() => addToCart(producto)}>
        🛒 Agregar al carrito
      </button>

      <button className="btn-detail" onClick={() => onViewDetail(producto)}>
        Ver detalle
      </button>

      <button className="btn-remove" onClick={() => onDelete(producto.id)}>
        Eliminar
      </button>
    </div>
  );
};

export default Item;
