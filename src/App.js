import NavBar from'./components/navBar/NavBar'
import ItemListContainer from './components/list/itemListContainer'
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting='Tienda de ropa' />
    </div>
  );
}

export default App;
