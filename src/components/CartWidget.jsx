import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartWidget() {
  const { cart } = useContext(CartContext);
  return <span>🛒 {cart.length}</span>;
}
