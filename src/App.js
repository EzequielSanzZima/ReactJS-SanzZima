import NavBar from'./components/navBar/NavBar'
import './App.scss';
import ItemListContainer from './components/Cards/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
