import React from "react";
import { cartContext } from "../../storage/cartContext";
import { useContext } from "react";
import Table from 'react-bootstrap/Table';
import MyButton from "../Buttons/MyButton/MyButton";
import "./cart.css"

function Cart(){
    const cart = useContext(cartContext).cart;
    const {removeItemInCart} = useContext(cartContext);
    const {totalItems} = useContext(cartContext);

    return(
    <>
      <div className="cart">
        <h1>Resumen de Compra</h1>
        <Table striped bordered  size="sm" className="align-middle text-center" >
          <thead>
            <tr>
              <th></th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>SubTotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
            <tr  key={item.key}>
                <td><img className="imgProducto" src={item.img} srcSet="" alt="imagen producto"/></td>
                <td>{item.titulo}</td>
                <td>{item.count}</td>
                <td>{item.discount ? item.precio - item.precio*item.discount : item.precio}</td>
                <td>{item.discount ? (item.precio - item.precio*item.discount)*item.count : item.precio*item.count}</td>
                <td><MyButton 
                        color="btn btn-outline-danger"
                        buttonTouch = {()=> removeItemInCart(item.IDproducto)}
                        text="X"
                /></td>
            </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Total</td>
              <td>$ {useContext(cartContext).totalTicket()}</td>
            </tr>
          </tbody>
        </Table>
        { totalItems()>0 && 
        <div>
          <MyButton
            text="Finalizar compra"
          />
        </div>}
      </div>

    </>
    );
}

export default Cart;