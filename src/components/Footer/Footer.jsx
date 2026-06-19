import logoInstagram from "../../assets/logo-instagram.jpg";
import logoWhatsapp from "../../assets/logo-whatsapp.jpg";
import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <p> Sitio desarrollado por KDAN </p>
      <nav>
        <ul className="nav-list-footer">
          <li>
            <Link to={"/"}>
              <img
                className="logo-whatsapp"
                src={logoWhatsapp}
                alt="logo-whatsapp"
              />
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <img
                className="logo-instagram"
                src={logoInstagram}
                alt="logo-instagram"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
