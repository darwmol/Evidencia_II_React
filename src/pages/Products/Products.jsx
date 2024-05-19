import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Products/Products.css";

export default function Products() {
  const [lista, setLista] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setLista(json));
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div>
      <div className="Productos-disponibles">
        <h1>Productos disponibles</h1>
      </div>
      {lista.map((elemento) => (
        <div key={elemento.id.toString()}>
          <div className="container">
            <div className="card">
              <img src={elemento.image} style={{ width: 400, height: 400 }} />
              <h3>{elemento.title}</h3>
              <Link className="linkproducts" to={`/products/${elemento.id}`}>
                Ver Producto
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
