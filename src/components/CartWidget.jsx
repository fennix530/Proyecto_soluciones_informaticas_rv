import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartWidget() {
  const { totalItems } = useContext(CartContext);

  return (
    <span style={{ marginLeft: "0.5rem", fontWeight: "bold" }}>
      🛒 {totalItems}
    </span>
  );
}
