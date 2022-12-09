import "./itemList.css"
import Item from "../Item/Item";


function  ItemList(props) {
    return (
    <>
        
        <div className="itemList">
          {props.productos.map( item =>{
              return <Item
                        key = {item.key}
                        id = {item.IDproducto}
                        titulo =  {item.titulo}
                        img = {item.img}
                        precio = {item.precio}
                      />          
          })}           
        </div>
    </>
    );
  }
  
  export default ItemList;