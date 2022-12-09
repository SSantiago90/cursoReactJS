import { Button } from "react-bootstrap";
import "./buttonCount.css"
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function  ButtonCount(props) {
  const [cantidad, setCantidad] = useState(1);
  function addCount(){
    if(cantidad < props.stock){
      setCantidad(cantidad + 1);
    }
  }

  function subtractCount(){
    if(cantidad > 1){
      setCantidad(cantidad - 1);
    }
  }

    return (
    <>
      <div className="buttonCount" >
        <Button variant="secondary" onClick={subtractCount}>-</Button>
        <input className="w-25 text-center" type="text" value={cantidad} readOnly disabled /> 
        <Button variant="secondary" onClick={addCount}>+</Button>
      </div>
        
    </>
    );
  }
  
  export default ButtonCount;