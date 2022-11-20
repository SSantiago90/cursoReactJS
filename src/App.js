
import './App.css';
import NavBAR from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';

function App() {
  return (
   <>
      <NavBAR/>
      <ItemListConteiner titulo="Productos" texto="listado de productos"/>
      <Footer/>
     
   </>
  );
}

export default App;
