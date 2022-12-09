import "./item.css"
import { Link } from "react-router-dom";

function  Item(props) {
    return (
    <>
        <Link to={`/item/${props.id}`}>
            <div className="item">
                <h5>{props.titulo}</h5>
                <img className="imgItem" src={props.img} alt="" srcset="" />
                <p>$ {props.precio}</p>
            </div>
        </Link>
        

    </>
    );
  }
  
  export default Item;