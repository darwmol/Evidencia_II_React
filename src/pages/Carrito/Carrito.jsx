import { useSelector } from "react-redux";
import "./Carrito.css";
import { Link } from "react-router-dom";

const renderizarProductos = (productos) => {
  return productos.map((producto) => (
    <div key={producto.id.toString()}>
      <div className="producto">
        <img className="imagecarrito" src={producto.image} />
        <h3 className="textproducto">{producto.title}</h3>
        <h2 className="priceproducto">$ {producto.price}</h2>
        <hr />
      </div>
    </div>
  ));
};

const Carrito = () => {
  const productosAgregados = useSelector((estadoActualDelApp) => {
    console.log(estadoActualDelApp.carrito.productos);
    return estadoActualDelApp.carrito.productos;
  });

  console.log("AGREGADOS", productosAgregados.useSelector);
  return (
    <div>
      <div>
        <h1 className="titlecarrito">Carrito de compras</h1>
        
      </div>
      <div>
        <ul>{renderizarProductos(productosAgregados)}</ul>
      </div>
      <div className="prueba">
      <Link className="comprarlink" to="">COMPRAR</Link>
      </div>
    </div>
  );
};
export default Carrito;
