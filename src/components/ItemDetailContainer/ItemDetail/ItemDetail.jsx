import "./itemDetail.css"



function  ItemDetail(props) {

  let altText = `imagen  + ${props.producto.titulo}`;


    return (
    <>
        <h1>{props.producto.titulo}</h1>
        <img className="imgDetail" src={props.producto.img}  alt ={altText} srcSet="" />
        <p><strong>Descripción del producto: </strong>{props.producto.descripcion}</p>
        <div className="divItemCount">
        <p><strong>$ {props.producto.precio}</strong></p>  
          
        </div>
        
    </>
    );
  }
  
  export default ItemDetail;