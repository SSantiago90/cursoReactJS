import React, { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";
import getItems, {getItemsByCategory,getItemsByCategoryMarca} from "../../services/mockService";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const categoria = useParams().categoria;
  const marca = useParams().marca;

  useEffect(() => {
    if (categoria === undefined) {
      getItems().then((respuesta) => {
        setProducts(respuesta);
      });
    }
    else {
      if(marca === undefined){
        getItemsByCategory(categoria).then((productosFiltrados) =>
        setProducts(productosFiltrados)
      );
      }
      else{
        getItemsByCategoryMarca(categoria,marca).then((productosFiltrados) =>
        setProducts(productosFiltrados)
      );
      }

    }
  }, [categoria,marca]);
  return <ItemList productos={products} />;
}

export default ItemListContainer;