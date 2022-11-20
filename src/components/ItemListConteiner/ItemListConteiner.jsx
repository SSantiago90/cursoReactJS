import "./itemListConteiner.css"

function  ItemListConteiner(props) {
    return (
    <>
      <div className="cuerpo">
        <h2>{props.titulo}</h2>
        <h3>{props.texto}</h3>

      </div>
    </>
    );
  }
  
  export default ItemListConteiner;