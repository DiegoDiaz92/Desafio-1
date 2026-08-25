import "./Header.css";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <a href="/" className="header__logo">
          <img src={logo} alt="Casa Verde" />
        </a>

        <nav className="header__nav" aria-label="Navegação principal">
          <ul className="menu">
            <li>
              <a href="#como-fazer">Como fazer</a>
            </li>
            <li>
              <a href="#ofertas">Ofertas</a>
            </li>
            <li>
              <a href="#depoimentos">Depoimentos</a>
            </li>
            <li>
              <a href="#videos">Vídeos</a>
            </li>
            <li>
              <a href="#carrinho">Meu carrinho</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;