import React, { useState, useEffect,useContext } from "react";
import { getItemByID } from "../../services/mockService";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";
import "./itemDetailContainer.css"
import ButtonCount from "../Buttons/ButtonCount/ButtonCount";
import { cartContext } from "../../storage/cartContext";
import Loader from "../Loader/Loader";

function  ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    const [Loading, setLoading] = useState(true);
    const itemID = useParams().IDproducto;
    const {addToCart} = useContext(cartContext);


useEffect(() => {
    getItemByID(itemID)
      .then((respuesta) => {
          setProduct(respuesta);
          setLoading(false);
    })
    .catch((error) => alert("Item no encontrado"));
    }, [itemID]); 

    function handleAddToCart(valor){
      addToCart(product,valor);
    }
    
    return (
    <>
      {
        Loading ? <Loader/> :
        <div className="itemDetail">
          <ItemDetail producto ={product}/>
          <ButtonCount stock = {product.stock} finishCount={handleAddToCart}/>   
        </div>
      }
    </>
    );
  }
  
  export default ItemDetailContainer;