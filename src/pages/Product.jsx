import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import ProductDisplay from "../components/product-display/ProductDisplay";
import DescriptionBox from "../components/description-box/DescriptionBox";

function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrumbs product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
    </div>
  );
}

export default Product;
