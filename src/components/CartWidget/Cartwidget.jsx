import "./cartWidget.css"
import { cartContext } from "../../storage/cartContext";
import { useContext } from "react";

function  CartWidget() {
    const {totalItems} = useContext(cartContext);
    return (
    <>
      <div className="carrito">
        <img className="icono" src="https://res.cloudinary.com/dtvv5h3mm/image/upload/v1668974611/cursoReactJS/iconCart_tvpvvk.svg" alt="Imagen carrito"/>
        <p>{totalItems()}</p>
      </div> 
    </>
    );
  }
  
  export default CartWidget;