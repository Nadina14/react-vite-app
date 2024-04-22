import { useContext } from "react";
import useShopContext from "../../hooks/useShopContext";

function ProductItem({info})  {
  const shopContext = useShopContext();
  const {id, titolo, prezzo} = info;
  const handleAddProduct = () => {
    shopContext.handleAddProductInCart({...info, qnt: 1});
  };
  
  return (
    <div className="product-item">
      <div>{titolo}</div>
      <div>{prezzo}</div>
      <div>
        <button onClick={handleAddProduct}>Aggiungi</button>
      </div>
    </div>
  )
};

export default ProductItem;
