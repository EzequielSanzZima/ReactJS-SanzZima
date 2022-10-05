import React, { useContext } from 'react'
import { cartCtx } from '../../context/CartContext';
import { Paper, Container, Box, Divider, Typography, Tab, Tabs, Button } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Link } from 'react-router-dom';
import { ItemCount } from '../Cards/Items/ItemCount'
import Checkout from '../checkout/Checkout';

function Cart() {
  const { cart, getTotalItemInCart, clearCart, removeItem, itemTotalPrice} = useContext(cartCtx)
  
  const [value] = React.useState(0);
  const tabCarrito = `Carrito (${getTotalItemInCart()})`
  
  function itemSetPrice(item){ 
    return item.price.fullPrice * item.count 
  }


  if(cart.length > 0){
    return (
      <>
        <Container sx={{pt: 5}} className='cartItem'>
          <Paper elevation={2}>
            <Box sx={{paddingLeft: '15px', paddingRight: '15px', pt: '5px', display: 'flex'}}>
              <Tabs value={value}>
                <Tab label={tabCarrito} className='emptyCart_Tabs'/>
                <Tab label="Guardados: (0)" disabled /> 
              </Tabs>
              <Box sx={{display: 'flex', alignItems: 'center'}}>
                  <DeleteForeverIcon onClick={clearCart}/>
                </Box>
            </Box>
            <Divider/>
            {cart.map((item) => 
            <Box key={item.id}sx={{pt: 2, pb: 2}}>
              <Container sx={{display: 'flex', justifyContent: 'space-around'}} >
                <Box>
                  <img src={item.img} alt={item.name} width='128px' height='128px'/>
                </Box>
                <Box sx={{paddingLeft: '15px', width: '75%',display: 'flex', alignItems: 'center'}}>
                  <Box sx={{display: 'flex', alignItems: 'center', width: '100%'}}>
                    <Box sx={{width: '45%'}}>
                      <Typography sx={{fontSize: '20px', fontWeight: '600', }}variant="h5" className='cartItem_NameItem'>
                        {item.name}
                      </Typography>
                      <Box display={'flex'}>
                        <p>x1: {item.price.fullPrice.toFixed(2)} | </p>
                        <p>Total: {itemSetPrice(item).toFixed(2)}</p>
                      </Box>
                    </Box>
                    <Box sx={{width:'75%', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                      <ItemCount cart="yes" item={item}/>
                      <p>Stock: {item.stock}</p>
                    </Box>
                    <HighlightOffIcon onClick={() => removeItem(item.id)}/>
                  </Box>
                </Box>
              </Container>
            </Box>
            )}
            <Divider/>
            <Box sx={{display: 'flex', justifyContent: 'flex-end', pt: '5px'}}>
              <Typography sx={{ fontWeight: 500, fontSize: '26px', verticalAlign: 'top'}}className='cartItem_Total'>
                Total:
              </Typography>
              <Box sx={{display: 'flex'}}>
              <Typography sx={{fontSize: '26px', px: '5px'}}>
                $
              </Typography>
              <Typography sx={{fontSize: '26px', pr: '7vh'}}className='cartItem_TotalPrice'>
                {itemTotalPrice().toFixed(2)} 
              </Typography>
              </Box>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'flex-end', width: '95.8%', pb: '15px'}}>
            <Button variant="contained" color="success" onClick={Checkout}>
              Finalizar Compra
            </Button>
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