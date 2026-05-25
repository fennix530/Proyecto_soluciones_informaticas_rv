import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("/data/productos.json")
      .then((res) => res.json())
      .then((data) => setProductos(data));
  }, []);

  return (
    <div className="productos-container">
      <h1>Productos disponibles</h1>
      <div className="productos-grid">
        {productos.map((p) => (
          <div key={p.id} className="producto-card">
            <h3>{p.nombre}</h3>
            <p>${p.precio}</p>
            <Link to={`/producto/${p.id}`}>
              <button>Ver detalle</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
