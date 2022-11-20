import "./cartWidget.css"

function  CartWidget(props) {
    return (
    <>
    <div className="carrito">
      <img className="icono" src="https://res.cloudinary.com/dtvv5h3mm/image/upload/v1668974611/cursoReactJS/iconCart_tvpvvk.svg" alt="Imagen carrito"/>
      <p>{props.cantidad}</p>
    </div>
     
    </>
    );
  }
  
  export default CartWidget;