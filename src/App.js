import NavBar from'./components/navBar/NavBar'
import './App.scss';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/Cards/ItemListContainer';
import ItemDetailContainer from './components/Details/ItemDetailContainer';
import Cart from './components/CartView/CartView';
import CartContextProvider from './context/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:category' element={<ItemListContainer/>}/>
          <Route path='/clothes/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
