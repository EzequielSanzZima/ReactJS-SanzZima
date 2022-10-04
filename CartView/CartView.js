import React, { useContext } from 'react'
import { cartCtx } from '../../context/CartContext';
import { Paper, Container, Box, Divider, Typography, Tab, Tabs, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, addItem, isInCart, getTotalItemInCart, clearCart, removeItem, itemTotalPrice} = useContext(cartCtx)
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if(cart.length > 0){
    return (
      <>
        <Container sx={{pt: 5}} className='cartItem'>
          <Paper elevation={2}>
            <Box sx={{paddingLeft: '15px', paddingRight: '15px', pt: '5px'}}>
              <Tabs value={value} className='cartItem_Tabs'>
                <Tab label="Carrito:"className='emptyCart_Tabs'/>
                <Tab label="Guardados: (0)" disabled />
              </Tabs>
              <Divider/>
            </Box>
            <Box>
            {cart.map((item) => 
              <div key={item.id}>{item.name},  |Cantidad: {item.count}|, ${item.price.fullPrice}</div>
            )}
            </Box>
          </Paper>
        </Container>
        
      </>
    )
  }
  return <>
    <Container sx={{pt: 5}} className='emptyCart'>
      <Paper elevation={2}>
          <Box sx={{paddingLeft: '15px', paddingRight: '15px', pt: '5px'}}>
            <Tabs value={value} className='emptyCart_Tabs'>
              <Tab label="Carrito: (0)" className='emptyCart_Tabs'/>
              <Tab label="Guardados: (0)" disabled />
            </Tabs>
            <Divider/>
          </Box>
          <Box sx={{height: '78vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <p className='emptyCart_text'>Tu carrito está vacío</p>
             <Box sx={{pt: 2}}>
              <Link to='/' className='text-link' >
                <div >
                  <Button variant="contained" className='emptyCart_button'>Volver al inicio</Button>
                </div>
              </Link>
             </Box>
            </Box>
          </Box>
      </Paper>
    </Container>
   

  </>
}

export default Cart