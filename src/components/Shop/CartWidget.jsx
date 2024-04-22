import Badge from "../Badge";
import cartIcon from "../../assets/cart.svg";
import useShopContext from "../../hooks/useShopContext";


function CartWidget() {
  const shopContext = useShopContext();
  return <Badge icon={cartIcon} withNumber={shopContext.productsInCart.length}/>
};

export default CartWidget;
