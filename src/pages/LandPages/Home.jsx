import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Encabezado from "../../components/Encabezado.jsx";
import Footer from "../../components/Footer.jsx";
import "../LandPages/LandPage.css";

const LandPage = () => {
  const navigate = useNavigate();

  const onProductosTextClick = useCallback(() => {
    navigate("/carrito");
  }, [navigate]);

  return (
    <div className="landpage">
      <div className="TiendaXpress-wrapper">
        <h1 className="TiendaXpress1">TiendaXpress</h1>
      </div>
      <section className="rectangle-group">
        <img className="frame-icon" src="/iconshop.png" />
        <div className="inicio-group">
          <div className="productos2" onClick={onProductosTextClick}></div>
        </div>
        <div className="rectangle-container"></div>
      </section>
      <div className="landpage-inner">
        <Encabezado />
      </div>
      <Footer />
    </div>
  );
};

export default LandPage;
