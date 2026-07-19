import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { db } from "../assets/firebase";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { CartContext } from "../context/CartContext";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [nuevo, setNuevo] = useState({ nombre: "", precio: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { addToCart } = useContext(CartContext);

  // Leer productos desde Firestore
  const fetchProductos = async () => {
    try {
      setLoading(true);
      const snapshot = await getDocs(collection(db, "productos"));
      setProductos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (err) {
      setError("Error al cargar productos: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  // Agregar producto al inventario
  const agregarProducto = async () => {
    if (!nuevo.nombre || nuevo.precio <= 0) {
      alert("El nombre es obligatorio y el precio debe ser mayor a 0");
      return;
    }
    try {
      await addDoc(collection(db, "productos"), nuevo);
      setNuevo({ nombre: "", precio: 0 });
      fetchProductos();
    } catch (err) {
      setError("Error al agregar producto: " + err.message);
    }
  };

  // Eliminar producto del inventario
  const eliminarProducto = async (id) => {
    if (window.confirm("¿Seguro que quieres eliminar este producto?")) {
      try {
        await deleteDoc(doc(db, "productos", id));
        fetchProductos();
      } catch (err) {
        setError("Error al eliminar producto: " + err.message);
      }
    }
  };

  return (
    <div className="productos-container">
      <h1>Productos disponibles</h1>

      {/* Formulario para agregar al inventario */}
      <div>
        <input
          placeholder="Nombre"
          value={nuevo.nombre}
          onChange={(e) => setNuevo({ ...nuevo, nombre: e.target.value })}
        />
        <input
          type="number"
          placeholder="Precio"
          value={nuevo.precio}
          onChange={(e) => setNuevo({ ...nuevo, precio: Number(e.target.value) })}
        />
        <button onClick={agregarProducto}>Agregar producto</button>
      </div>

      {/* Mensajes de error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Spinner de carga */}
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="productos-grid">
          {productos.map((p) => (
            <div key={p.id} className="producto-card">
              <h3>{p.nombre}</h3>
              <p>${p.precio}</p>
              
              {/* Botón para carrito */}
              <button onClick={() => addToCart(p)}>🛒 Agregar al carrito</button>

              {/* Botón para ver detalle */}
              <Link to={`/producto/${p.id}`}>
                <button>Ver detalle</button>
              </Link>

              {/* Botón para eliminar de BD */}
              <button onClick={() => eliminarProducto(p.id)}>Eliminar</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
