import { Button, Typography, Paper, Container, Box } from '@mui/material';
import { ItemCount } from '../Cards/Items/ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { cartCtx } from '../../context/CartContext';

function ItemDetail({item}) {
  const [add, setAdd] = useState(false)
  const { addItem, isInCart } = useContext(cartCtx)

  function onAddToCart(count){
    setAdd(true)
    addItem(item, count);
    isInCart(item.id)
  }

  return <>
  <Container key={item.id} >
    <Container sx={{display: 'flex', pt: 5}}>
        <Box sx={{display: 'flex'}}>
          <img src={item.img} alt={item.name} className='detailImg' height={650} />
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'Column'}} className='detailProduct'>
          <Container sx={{display: 'flex', flexDirection: 'Column', mb: 5 }}>
            <Typography fontFamily='sans-serif' fontSize={22} component="div" sx={{mt: 10}}>
                            {item.name}
            </Typography>
            <p className='stock-availability'>En stock - Este artículo saldrá del almacén en un día laborable.</p>
            <Typography fontFamily='sans-serif' fontSize={20} component="div" sx={{m: 0,}} className="priceDetail" >
                <sup className='priceDetail_US'>US$</sup> 
                <span> {item.price.whole}</span>
                <sup className='priceDetail_US'>{item.price.cent}</sup> 
            </Typography>
          </Container>
          { add ? 
            <Container>
              <Paper elevation={2} sx={{display: 'flex',flexDirection: 'column', pt:1, pb: 1, width: '100%'}}>
              <Link to='/cart' className='text-link'>
                <Button variant="contained" size="small" color="primary">Carrito</Button>
              </Link>
              <Link to='/' className='text-link'>
                <Button variant="contained" size="small" color="primary">Seguir comprando</Button>
              </Link>
              </Paper>
            </Container>
          : 
          <ItemCount stock={item.stock} initial={1} onAddToCart={onAddToCart} /> }

          <Container sx={{mt: 5}}>
              <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Envíos</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component='div'>
                  <ul>
                    <li>Este artículo saldrá del almacén en un día laborable.</li>
                  </ul>   
                </Typography >
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Detalles</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component='div'>
                  <ul>
                    <li>{item.detail.detail1}</li>
                    <li>{item.detail.detail2}</li>
                    <li>{item.detail.detail3}</li>
                    <li>{item.detail.detail4}</li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>Descripción</Typography>
              </AccordionSummary>
              <AccordionDetails>
              <Typography component='div'>
                  {item.description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Container>
          
          </Box>
    </Container>
  </Container>
</>
}

export default ItemDetail
