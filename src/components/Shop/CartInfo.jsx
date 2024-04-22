import useShopContext from "../../hooks/useShopContext";

function CartInfo(){
  const shopContext = useShopContext();
  const calcolaTotale = () => {
    let totale = 0;
    for(let {prezzo} of shopContext.productsInCart){
      totale += prezzo
    };
    return totale;
  }
  return (
    <section>
      <h3>Carrello</h3>
      <section>
        {shopContext.productsInCart.map(product => {
          return (
            <div key={Math.random() * 1e6 | 0}>
              {product.titolo} - € {product.prezzo}
            </div>
          );
        })}
      </section>
      <h4>Totale: {calcolaTotale()}€</h4>
    </section>
  )
};

export default CartInfo;
