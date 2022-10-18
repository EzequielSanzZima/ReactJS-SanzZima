import React, { useState, createContext} from 'react'
const cartCtx = createContext();

export default function CartContextProvider({ children }) {
    const [cart, setCart] = useState([])

    //Verifica si esta en el carrito
    function isInCart(id){
        return cart.some((item) => item.id === id)
    }

    //Agrega el item al carrito o crea uno nuevo si no hay nada.
    function addItem(item, count) {
        if (isInCart(item.id)) {
          let newCart = cart.map((itemMap) => {
            if (itemMap.id === item.id) {
              itemMap.count = count;
              return itemMap;
            } else return itemMap;
          });
    
          setCart([...newCart]);
        } else {
          let newCart = cart.map((item) => item);
          newCart.push({ ...item, count: count });
          setCart(newCart);
        }
    }

    //Muestra en el cartWidget el numero de item que hay.
    function getTotalItemInCart(){
        return cart.reduce((cou, item) => cou += item.count, 0)
    }

    //Elimina el item del carrito.
    function removeItem(id){
        return setCart(cart.filter(item => item.id !== id))
    }

    //Elimina todos los objetos del carrito.
    function clearCart(){
        return setCart([])
    }

    //Muestra el precio de todos los items juntos.
    function itemTotalPrice ()  {
        return cart.reduce((cou, item) => cou += item.count * item.price.fullPrice, 0)
    }
    
    //Suma la cantidad de item, ubicado en ItemDetail.
    function addItemView(item) {
      if (item.count <= item.stock - 1 && item.stock !== 0 && item.count >= 0) {
          item.count += 1
          setCart([...cart])
      }
    }

    //Baja la cantidad de item, ubicado en ItemDetail.
    function removeItemView(item){
      if (item.count > 1) {
        item.count -= 1
        setCart([...cart])
      }
    }

  return (
    <cartCtx.Provider value={{addItem, isInCart, getTotalItemInCart, clearCart, removeItem, itemTotalPrice, cart, addItemView, removeItemView}}>{children}</cartCtx.Provider>
  )
}

export { cartCtx };