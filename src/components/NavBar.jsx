import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <nav style={{display:  "flex", gap: "1rem", padding: "1rem", background: "#eee" }}>
      <Link to="/">Home</Link>
      <Link to="/productos">Productos</Link>
      <Link to="/carrito">Carrito</Link>
      <CartWidget />
    </nav>
  );
}
