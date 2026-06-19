import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({ products }) => {
  if (!products.length) {
    return <p>No hay productos</p>;
  }

  return (
    <div className="products-container">
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          {" "}
          {/*se pone aquí el Link y no en Item para que no colicione o haya conflicto de este evento con el de boton para agregar carrito que está en Item*/}
          <Item {...product} />
        </Link>
      ))}
    </div>
  );
};
