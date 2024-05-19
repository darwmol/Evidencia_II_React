import IconBox from "./IconBox";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="icon-box-wrapper">
      <div className="icon-box">
        <IconBox
          truck="/truck1.svg"
          heading="Envío gratuito"
          text="Por compras superiores a $100.000"
        />
        <IconBox
          truck="/creditcard.svg"
          heading="Pago rápido"
          text="100% Seguro"
          propDisplay="inline-block"
          propMinWidth="100px"
        />
        <IconBox
          truck="/gift.svg"
          heading="Cashback "
          text="Reintegramos el 1% de tu compra"
          propDisplay="unset"
          propMinWidth="unset"
        />
        <IconBox
          truck="/users.svg"
          heading="Soporte 24/7"
          text="Siempre listos para ayudarte"
          propDisplay="inline-block"
          propMinWidth="107px"
        />
      </div>
    </div>
  );
};

export default Footer;
