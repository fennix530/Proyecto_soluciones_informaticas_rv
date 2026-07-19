import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/carrito">
          Carrito <CartWidget />
        </Link>
      </div>
    </nav>
  );
}
