import "./item.css"
import { Link } from "react-router-dom";

function  Item(props) {
    let altText = `imagen  + ${props.titulo}`;
    return (
    <>
        <Link to={`/item/${props.id}`}>
            <div className="item">
                <h5>{props.titulo}</h5>
                <img className="imgItem" src={props.img} alt ={altText} srcSet="" />
                <p className="precio">$ {props.precio}</p>
            </div>
        </Link>
        

    </>
    );
  }
  
  export default Item;