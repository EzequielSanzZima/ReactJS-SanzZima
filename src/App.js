import NavBar from'./components/navBar/NavBar'
import './App.scss';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/Cards/ItemListContainer';
import ItemDetailContainer from './components/Details/ItemDetailContainer';
import Cart from './components/CartView/CartView';
import CartContextProvider from './context/CartContext';
import CheckoutForm from './components/checkoutForm/CheckoutForm';
import NotFound404 from './components/notfound404/NotFound404';
import ViewOrders from './components/viewOrders/ViewOrders';
import OrderAccount from './components/viewOrders/OrderAccount'

function App() {
  return <>
    <BrowserRouter>
      <CartContextProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:category' element={<ItemListContainer/>}/>
          <Route path='/clothes/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<CheckoutForm/>}/>
          <Route path='*' element={<NotFound404/>}/>
          <Route path='/orders' element={<ViewOrders/>}/>
          <Route path='/orders/:id' element={<OrderAccount/>}/>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  </>
}

export default App;
