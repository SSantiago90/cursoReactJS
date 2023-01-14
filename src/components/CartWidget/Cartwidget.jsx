import "./cartWidget.css"
import { cartContext } from "../../storage/cartContext";
import { useContext } from "react";

function  CartWidget() {
    const {totalItems} = useContext(cartContext);
    const cartIsEmpty = totalItems() > 0;
    return (
    <>
      <div className="carrito">
       <img className="icono" src="https://res.cloudinary.com/dtvv5h3mm/image/upload/v1668974611/cursoReactJS/iconCart_tvpvvk.svg" alt="Imagen carrito"/>
        { cartIsEmpty &&  <p>{totalItems()}</p>}
      </div> 
    </>
    );
  }
  
  export default CartWidget;