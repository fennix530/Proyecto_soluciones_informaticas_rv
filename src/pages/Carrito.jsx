import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Carrito() {
  const { cart, addToCart, removeFromCart, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return <h2 className="carrito-container">Tu Carrito está vacío 🛒</h2>;
  }

  const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <div className="carrito-container">
      <h2>Productos en tu carrito</h2>
      <table className="carrito-table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td>${item.precio}</td>
              <td>{item.cantidad}</td>
              <td>
                <button onClick={() => addToCart(item)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>-</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className="carrito-total">Total: ${total}</h3>
      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
}
