import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

function ItemCount({stock, initial, onAdd}) {
  const [count, setCount] = useState(initial)
  function plus(){
    if(count<stock){
      setCount(count+1)
    }
  }
  function minus(){
      if(count>1){
        setCount(count-1)
    }
  }


  return <>
    <Container sx={{display: 'flex', flexWrap: 'wrap', alignContent: 'center', justifyContent: 'space-between', alignItems: 'center'}}>
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <RemoveIcon onClick={minus} fontSize='small'/>
          <Typography gutterBottom variant="h6" component="div" sx={{m: 0, mx: 1}}>
            {count}
          </Typography>
          <AddIcon fontSize='small' onClick={plus}/>
        </Box>
        <Button size="small" color="primary" onClick={()=>onAdd(count)}>
                  Agregar al carrito
        </Button>
    </Container>
  </>
}

export default ItemCount