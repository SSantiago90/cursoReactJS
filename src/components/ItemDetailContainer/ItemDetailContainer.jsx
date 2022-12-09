import React, { useState, useEffect } from "react";
import { getItemByID } from "../../services/mockService";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function  ItemDetailContainer() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getItemByID(useParams().IDproducto)
          .then((respuesta) => {
            setProduct(respuesta);
          })
          .catch((error) => alert("Item no encontrado"));
      }, []); 
    return (
    <>
        <ItemDetail 
                titulo = {product.titulo}
                img = {product.img}
                descripcion = {product.descripcion}
                precio = {product.precio}
                stock = {product.stock}
        />
    </>
    );
  }
  
  export default ItemDetailContainer;