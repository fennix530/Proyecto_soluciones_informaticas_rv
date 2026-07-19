import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Carrito = () => {
  const { cart, addToCart, removeFromCart, clearCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center" }}>Tu carrito está vacío 🛒</h2>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Productos en tu carrito</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.nombre} - ${item.precio} x {item.cantidad}
            <button onClick={() => removeFromCart(item.id)}>➖</button>
            <button onClick={() => addToCart(item)}>➕</button>
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice}</h3>
      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
};

export default Carrito;
