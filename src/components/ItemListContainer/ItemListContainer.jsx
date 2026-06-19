import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { getProducts } from "../../services/productsService";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    //Con el JSON LOCAL
    // fetch("/data/products.json") // Todo lo que está en public se referencia en forma directa, no se referencia como ./public/data.
    //   .then((res) => res.json())
    // Utilizando Firestore:
    getProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.log("Hubo un error:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
    <section>
      <h1> Bienvenidos a Biblioteca Mia </h1>
      <p className="parrafo-home">
        El lugar donde podes encontrar el libro que necesites
      </p>
      <h2> Alguno de nuestros libros destacados</h2>
      <ItemList products={products} />
    </section>
  );
};
