import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import accionesDelCarrito from "../../Slicers/Carrito";
import "../Product/Product.css";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [producto, setProducto] = useState();

  const [isLoading, setIsLoading] = useState(true);

  const handleAgregarAlCarrito = () => {
    console.log("Agregando al carrito", producto.id);
    dispatch(accionesDelCarrito.agregarAlCarrito(producto));
    window.alert("Producto añadido al carrito");
    navigate("/Products");
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducto(json);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div>
      <h1 className="Productos-disponibles2">{producto.title}</h1>
      <div className="container1">
        <div className="cardproduct">
          <img src={producto.image} style={{ width: 350, height: 350 }} />
          <p>{producto.description}</p>
          <p className="price">$ {producto.price}</p>
          <p> {producto.category}</p>
          <button className="button" onClick={() => handleAgregarAlCarrito()}>
          AÑADIR AL CARRITO
        </button>
        </div>
       
      </div>
    </div>
  );
};
export default Product;
