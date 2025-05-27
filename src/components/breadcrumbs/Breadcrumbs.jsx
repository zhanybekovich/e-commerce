import "./breadcrumbs.css";
import arrowIcon from "../assets/breadcrum_arrow.png";

function Breadcrumbs(props) {
  const { product } = props;

  return (
    <div className="breadcrumbs">
      HOME <img src={arrowIcon} alt="" /> SHOP <img src={arrowIcon} alt="" />{" "}
      {product.category} <img src={arrowIcon} alt="" /> {product.name}
    </div>
  );
}

export default Breadcrumbs;
