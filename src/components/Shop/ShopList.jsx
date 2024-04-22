import ProductItem from "./ProductItem";
import useShopContext from "../../hooks/useShopContext";

function ShopList() {
  const shopContext = useShopContext();
  return (
    <section className="shop-list">
      {shopContext.products.map((product) => (<ProductItem key={product.id} info={product}/>))}
    </section>
  )
};

export default ShopList;
