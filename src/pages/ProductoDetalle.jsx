import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductoDetalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("/data/productos.json")
      .then((res) => res.json())
      .then((data) => {
        const encontrado = data.find((p) => p.id === parseInt(id));
        setProducto(encontrado);
      });
  }, [id]);

  if (!producto) {
    return <h2 style={{ textAlign: "center" }}>Producto no encontrado ❌</h2>;
  }

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>{producto.nombre}</h2>
      <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
        Precio: ${producto.precio}
      </p>

      <button
        onClick={() => addToCart(producto)}
        style={{
          background: "#28a745",
          color: "white",
          border: "none",
          padding: "0.6rem 1.2rem",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
          marginTop: "1rem",
          marginRight: "1rem"
        }}
      >
        Agregar al carrito 🛒
      </button>

      {/* Botón para volver al listado */}
      <Link to="/productos">
        <button
          style={{
            background: "#007bff",
            color: "white",
            border: "none",
            padding: "0.6rem 1.2rem",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            marginTop: "1rem"
          }}
        >
          Volver a productos 🔙
        </button>
      </Link>
    </div>
  );
}
