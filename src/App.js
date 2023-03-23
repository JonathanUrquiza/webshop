import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Promesas from './test-components/Promesas';
import ItemList from './test-components/ItemList';
import Item from './test-components/Item';
import ItemListContainer from './test-components/ItemListContainer';



function App() {
 /*  let producto = { nombre: "Helio", id: 1, simbolo: "He", electroNegatividad: 4 }
  let producto2 = { nombre: "Hidrógeno", id: 2, simbolo: "H", electroNegatividad: 3 }
  let producto3 = {nombre: "Aluminio", id:3, simbolo:"Al", electroNegatividad:5,}
  function saludar() {
    console.log("hola mondo!");
  }
saludar();
 */
  return (
    <div className="App">
      <header >
        <NavBar />
      </header>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header>
      <ItemListContainer/>
      <ItemList />
      <Item />
      <Promesas />
        {/* <TablaPeriodicaLayout/> */}
    {/*   <Producto item={producto} saludar={saludar} />
      <Producto item={producto} saludar={saludar} /> */}
     
      <main />
      <Footer />

    </div>
  );
}

export default App;
