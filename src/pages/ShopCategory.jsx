import { useContext } from "react";
import "./css/shop-category.css";
import { ShopContext } from "../context/shopContext";
import dropdownIcon from "../components/assets/dropdown_icon.png";
import Item from "../components/item/Item";

function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="shop-category-banner" src={props.banner} alt="" />
      <div className="shop-category-index-sort">
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>

        <div className="shop-category-sort">
          Sort by <img src={dropdownIcon} alt="" />
        </div>
      </div>
      <div className="shop-category-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shop-category-load-more">Explore More</div>
    </div>
  );
}

export default ShopCategory;
