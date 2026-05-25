import { useEffect, useState } from 'react';
import Item from '../components/Item';

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('/productos.json')
      .then(res => res.json())
      .then(data => setProductos(data));
  }, []);

  return (
    <div>
      {productos.map(prod => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
}
