import { useMemo } from "react";
import "./IconBox.css";

const IconBox = ({ truck, heading, text, propDisplay, propMinWidth }) => {
  const textStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className="icon-box-1">
      <img className="truck-icon3" loading="lazy" alt="" src={truck} />
      <div className="title">
        <div className="heading19">{heading}</div>
        <div className="text1" style={textStyle}>
          {text}
        </div>
      </div>
    </div>
  );
};

export default IconBox;
