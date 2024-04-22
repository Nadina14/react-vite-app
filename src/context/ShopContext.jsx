import { createContext, useState } from "react";

const ShopContext = createContext({
    handleAddProductInCart: () => null,
    productsInCart: [],
    products: [],
});
export default ShopContext;

export function ShopContextProvider({children}) {
    const [productsInCart, setProductsInCart] = useState([]);
    const shopContextObj = {
        productsInCart,
        handleAddProductInCart: (product) => {
            setProductsInCart(prevProdInCart => [...prevProdInCart, product]);
        },
        products: [
            { id: 1, titolo: "Prodotto 1", prezzo: 3.25 },
            { id: 2, titolo: "Prodotto 2", prezzo: 5.25 },
            { id: 3, titolo: "Prodotto 3", prezzo: 6 },
        ],
    };

    return (
        <ShopContext.Provider value={shopContextObj}>{children}</ShopContext.Provider>
    );
}