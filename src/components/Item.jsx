export default function Item({ nombre, precio, onAdd }) {
  return (
    <div className="producto-card">
      <h3>{nombre}</h3>
      <p>${precio}</p>
      <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
}
