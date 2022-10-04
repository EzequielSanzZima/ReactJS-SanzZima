import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'

function Item ({item}) {
  return (  
    <Grid key={item.id} sx={{display: 'flex'}} className='cardView'>
        <Grid item md={3}>
            <Container fixed sx={{mt: 1}}>
                <Box>
                    <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                    <CardMedia
                        component="img"
                        height="320"
                        image={item.img}
                        alt={item.name}
                    />
                    <CardContent sx={{display: 'flex', justifyContent: 'center', p: 0, pt: 2}}>
                        <Typography fontFamily='sans-serif' fontSize={18} component="div" sx={{m: 0}}>
                        {item.name}
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <Divider sx={{pb: '10px'}}/>
                        <Container sx={{display: 'flex', justifyContent: 'space-evenly',alignItems: 'center', pt: '10px', pb: '10px'}}>
                            <Typography fontFamily='sans-serif' fontSize={20} component="div" sx={{mt: 1,}} className="priceDetail" >
                                <sup className='priceDetail_US'>US$</sup> 
                                <span> {item.price.whole}</span>
                                <sup className='priceDetail_US'>{item.price.cent}</sup> 
                            </Typography>
                            <Link to={`/clothes/${item.id}`} className='text-link'>
                                <Button size="small" variant="contained" className='cardView_buttonViewDetails'>Ver Detalles</Button>
                            </Link>
                        </Container>
                        
                    </Card>
                </Box>
            </Container> 
        </Grid>
    </Grid>
       
  )
}

export { Item } 