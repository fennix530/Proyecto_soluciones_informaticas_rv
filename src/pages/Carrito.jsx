import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Carrito() {
  const { cart, addToCart, removeFromCart, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center" }}>Tu Carrito está vacío 🛒</h2>;
  }

  const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Productos en tu carrito</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1rem" }}>
        <thead>
          <tr style={{ background: "#004080", color: "white" }}>
            <th style={{ padding: "0.5rem", border: "1px solid #ccc" }}>Producto</th>
            <th style={{ padding: "0.5rem", border: "1px solid #ccc" }}>Precio</th>
            <th style={{ padding: "0.5rem", border: "1px solid #ccc" }}>Cantidad</th>
            <th style={{ padding: "0.5rem", border: "1px solid #ccc" }}>Acción</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id} style={{ textAlign: "center" }}>
              <td style={{ padding: "0.5rem", border: "1px solid #ccc" }}>{item.nombre}</td>
              <td style={{ padding: "0.5rem", border: "1px solid #ccc" }}>${item.precio}</td>
              <td style={{ padding: "0.5rem", border: "1px solid #ccc" }}>{item.cantidad}</td>
              <td style={{ padding: "0.5rem", border: "1px solid #ccc" }}>
                <button onClick={() => addToCart(item)} style={{ marginRight: "0.5rem" }}>+</button>
                <button onClick={() => removeFromCart(item.id)}>-</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 style={{ textAlign: "right", marginBottom: "1rem" }}>Total: ${total}</h3>

      <div style={{ textAlign: "center" }}>
        <button
          onClick={clearCart}
          style={{
            background: "#007bff",
            color: "white",
            border: "none",
            padding: "0.6rem 1.2rem",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Vaciar carrito
        </button>
      </div>
    </div>
  );
}
