import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Encabezado.css";

const Encabezado = () => {
  const navigate = useNavigate();

  const onIconClick = useCallback(() => {
    navigate("/products");
  }, [navigate]);

  return (
    <div className="frame-parent3">
      <div className="store-frame">
        <h1 className="store-description">
          Descubre tu tienda en línea para una amplia gama de productos de
          calidad a precios competitivos. Realiza tus compras de manera fácil,
          con envío rápido y acceso a las últimas tendencias.  Todo en un solo
          lugar!
        </h1>
      </div>
      <div className="icon-wrapper1">
        <button className="icon5" onClick={onIconClick}>
          <div className="heading18">Ver productos</div>
        </button>
      </div>
    </div>
  );
};

export default Encabezado;
