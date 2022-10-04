import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Paper, Typography, Box, Button, Container } from '@mui/material';

function ItemCount({stock, initial, onAddToCart}) {
  const [count, setCount] = useState(initial)
  
  function plus(){
    if(count<stock) setCount(count+1)
  }
  function minus(){
      if(count>1) setCount(count-1)
  }


  return <>
    <Container>
    <Paper sx={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignContent: 'center', justifyContent: 'space-between', alignItems: 'center'}} className='icon' >
        <Box sx={{display: 'flex', alignItems: 'center', mb: 1}} className=''>
          <RemoveIcon onClick={minus} className='icon_countMinus' fontSize='small' />
          <Typography gutterBottom variant="h6" component="div" sx={{mb: 0, mx: 1}}>
            {count}
          </Typography>
          <AddIcon fontSize='small' onClick={plus} className='icon_countPlus'/>
        </Box>
        <Button variant="contained" size="small" onClick={()=>onAddToCart(count)} className='icon_buttonAddToCart'>
                  Agregar al carrito
        </Button>
    </Paper>
    </Container>
  </>
}

export  { ItemCount }