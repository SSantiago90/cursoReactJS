import React, { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";
import getItems, {getItemsByCategory} from "../../services/mockService";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const categoria = useParams().categoria;

  useEffect(() => {
    if (categoria === undefined) {
      getItems().then((respuesta) => {
        setProducts(respuesta);
      });
    } else {
      getItemsByCategory(categoria).then((productosFiltrados) =>
        setProducts(productosFiltrados)
      );
    }
  }, [categoria]);
  return <ItemList productos={products} />;
}

export default ItemListContainer;