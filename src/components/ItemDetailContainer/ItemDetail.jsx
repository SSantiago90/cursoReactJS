function  ItemDetail(props) {
    return (
    <>
        <h1>{props.titulo}</h1>
        <img src={props.img} alt=""/>
        <p>{props.descripcion}</p>
        <p>$ {props.precio}</p>
    </>
    );
  }
  
  export default ItemDetail;