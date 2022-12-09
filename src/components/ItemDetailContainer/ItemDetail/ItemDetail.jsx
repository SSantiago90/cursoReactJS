import "./itemDetail.css"
import { Button } from "react-bootstrap";

function  ItemDetail(props) {
  let altText = `imagen  + ${props.titulo}`;
    return (
    <>
        <h1>{props.titulo}</h1>
        <img className="imgDetail" src={props.img}  alt ={altText} srcSet="" />
        <p>{props.descripcion}</p>
        <div>
          <p>$ {props.precio}</p>  
          <Button variant="secondary"> test</Button>
        </div>
        
    </>
    );
  }
  
  export default ItemDetail;