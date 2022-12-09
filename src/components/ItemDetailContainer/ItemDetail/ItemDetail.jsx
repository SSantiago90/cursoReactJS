function  ItemDetail(props) {
  let altText = `imagen  + ${props.titulo}`;
    return (
    <>
        <h1>{props.titulo}</h1>
        <img src={props.img}  alt ={altText} srcSet="" />
        <p>{props.descripcion}</p>
        <p>$ {props.precio}</p>
    </>
    );
  }
  
  export default ItemDetail;