import CartWidget from "./Shop/CartWidget"

function Header (){
  return (
    <header className="main-header">
        <section className="main-menu">
            <nav className="menu">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/chi-siamo">Chi Siamo</a></li>
                    <li><a href="/contatti">Contatti</a></li>
                </ul>
            </nav>
        </section>
        <section className="cart-widget">
            <CartWidget/>
        </section>
    </header>
  )
};

export default Header;
