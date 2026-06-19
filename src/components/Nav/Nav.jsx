import "./Nav.css";
import { Link } from "react-router-dom";
import logoCarrito from "../../assets/icono-carrito.jpg";
import logoHome from "../../assets/icono-home.jpg";
import { useCart } from "../../context/CartContext";

export const Nav = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link to={"/"}>
            <img className="logo-home" src={logoHome} alt="logo-home" />
          </Link>
        </li>
        <li>
          <Link to={"/carrito"}>
            <img
              className="logo-carrito"
              src={logoCarrito}
              alt="logo-carrito"
            />
            {totalItems > 0 && <span className="incart">{totalItems}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
