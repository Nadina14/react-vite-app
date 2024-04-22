import { useContext } from "react";
import ShopContext from "../context/ShopContext";

function useShopContext() {
    return useContext(ShopContext);
}

export default useShopContext;