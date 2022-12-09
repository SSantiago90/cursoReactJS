import "./itemDetail.css"
import ButtonCount from "../../ButtonCount/ButtonCount";

function  ItemDetail(props) {
  let altText = `imagen  + ${props.titulo}`;
    return (
    <>
        <h1>{props.titulo}</h1>
        <img className="imgDetail" src={props.img}  alt ={altText} srcSet="" />
        <p>{props.descripcion}</p>
        <div className="divItemCount">
          <p>$ {props.precio}</p>  
          <ButtonCount stock = {props.stock}/>
        </div>
        
    </>
    );
  }
  
  export default ItemDetail;