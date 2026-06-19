import { Link } from "react-router-dom";
import logo from "../../assets/logo-libro.jpg";
import { Nav } from "../Nav/Nav";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to={"/"}>
          <img src={logo} alt="logo-libro" />
          <span>Biblioteca Mia</span>{" "}
          {/* <span> is an inline element. It stays on the same line as surrounding content and only takes up as much width as necessary. */}
        </Link>
      </div>
      <Nav />
    </header>
  );
};
