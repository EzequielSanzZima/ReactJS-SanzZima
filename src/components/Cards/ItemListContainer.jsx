import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

import Container from '@mui/material/Container'
import Box from '@mui/material/Box';

import ItemCount from './ItemCount';


function itemListContainer(){
  function onAdd(cantidad){
    alert(`Se agrego al carrito ${cantidad}`)
  }
    return (
      <Container fixed sx={{mt: 3}}>
        <Box sx={{display: 'flex', flexWrap: 'wrap', alignContent: 'center', justifyContent: 'center'}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="320"
                image='//images.footballfanatics.com/red-bull/oracle-red-bull-racing-2022-team-t-shirt_ss4_p-13300649+u-w4u34ud78xqny7usgbtn+v-23202ea1cf1f4881919aa5673234fc11.jpg?_hv=2&w=340'
                alt="remera"
              />
              <CardContent sx={{display: 'flex', justifyContent: 'center', p: 0, pt: 2}}>
                <Typography gutterBottom variant="h6" component="div" sx={{m: 0}}>
                Remera del equipo Red Bull
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <ItemCount stock={20} initial={1} onAdd={onAdd}/> 
            </CardActions>
          </Card>
        </Box>
      </Container>
      );
}
export default itemListContainer;