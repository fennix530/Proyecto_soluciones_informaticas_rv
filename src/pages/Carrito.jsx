import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Carrito = () => {
  const { cart, addToCart, removeFromCart, clearCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center" }}>Tu carrito está vacío 🛒</h2>;
  }

  return (
    <div className="carrito-container">
      <h2>Productos en tu carrito</h2>
      <table className="carrito-table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td>${item.precio}</td>
              <td>{item.cantidad}</td>
              <td>
                <button className="btn-remove" onClick={() => removeFromCart(item.id)}>➖</button>
                <button className="btn-add" onClick={() => addToCart(item)}>➕</button>
                <button className="btn-remove" onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="carrito-total">Total: ${totalPrice}</div>
      <button className="btn-remove" onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
};

export default Carrito;
