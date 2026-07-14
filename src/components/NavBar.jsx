import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <nav style={{ background: "#004080", padding: "1rem", color: "white" }}>
      <Link to="/" style={{ marginRight: "1rem", color: "white" }}>Home</Link>
      <Link to="/productos" style={{ marginRight: "1rem", color: "white" }}>Productos</Link>
      <Link to="/carrito" style={{ marginRight: "1rem", color: "white" }}>
        Carrito <CartWidget />
      </Link>
    </nav>
  );
}
