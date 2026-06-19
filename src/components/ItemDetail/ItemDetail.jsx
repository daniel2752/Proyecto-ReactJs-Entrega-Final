import { Item } from "../Item/Item";
import { useCart } from "../../context/CartContext";

export const ItemDetail = ({ item }) => {
  const { addItem } = useCart();
  return (
    <Item {...item}>
      <button className="btn primary" onClick={() => addItem(item)}>
        {/* A onClick le agrego la función flecha, para que no se autoinvoque ese botón */}
        Agregar al carrito
      </button>
      {/* Va a aparecer adentro del children en Item.jsx */}
    </Item>
  );
};
