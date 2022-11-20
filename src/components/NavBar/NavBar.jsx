import "./navBar.css"
import CartWidget from "../CartWidget/Cartwidget";

function  NavBAR() {
    return (
    <>
      <nav className="navBar">
        <ul>
          <li>
            <img src="https://res.cloudinary.com/dtvv5h3mm/image/upload/v1668975701/cursoReactJS/iconBeer_ntnsxk.svg" alt= "logo" />
          </li>
          <li>
            <a href="#">Productos 1</a>
          </li>
          <li>
            <a href="#">Productos 2</a>
          </li>
          <li>
            <a href="#">Productos 3</a>
          </li>
          
           
          
        </ul>
        <CartWidget cantidad={3}/>
      </nav>  
    </>
    );
  }
  
  export default NavBAR;