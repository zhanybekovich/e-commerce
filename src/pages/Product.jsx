import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import ProductDisplay from "../components/product-display/ProductDisplay";

function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrumbs product={product} />
      <ProductDisplay product={product} />
    </div>
  );
}

export default Product;
