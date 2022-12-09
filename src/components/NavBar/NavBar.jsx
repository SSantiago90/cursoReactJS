import "./navBar.css"
import CartWidget from "../CartWidget/Cartwidget";
import { Link } from "react-router-dom";

function  NavBAR() {
    return (
    <>
      <nav className="navBar">
        <ul>
          <li>
            <Link to={"/"}>
              <img src="https://res.cloudinary.com/dtvv5h3mm/image/upload/v1668975701/cursoReactJS/iconBeer_ntnsxk.svg" alt= "logo" />
            </Link>          
          </li>
          <li>
            <Link to={"/categoria/cerveza"}>Cervezas</Link>
          </li>
          <li>
            <Link to={"/categoria/snack"}>Snacks</Link>
          </li>
          <li>
            <Link to={"/"}>Productos 3</Link>
          </li>
          
           
          
        </ul>
        <CartWidget cantidad={3}/>
      </nav>  
    </>
    );
  }
  
  export default NavBAR;