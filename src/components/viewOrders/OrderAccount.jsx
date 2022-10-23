import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CircularIndeterminate from '../Cards/Charging'
import { getElementByID } from  '../../services/firestore'
import { Container, Paper, Box, Divider, Typography } from '@mui/material'

function OrderAccount() {
    const {id} = useParams()
    const [purchase, setPurchase] = useState()
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        getElementByID(id, 'orders').then((data) => {
            const filteredId = data;
            setPurchase(filteredId)
            setLoading(false)
        })
    }, [id])

    
    if (isLoading) {
        return (
            <CircularIndeterminate/>
        )
    }

    const {date} = purchase
    const {seconds} = date

    /* eslint-disable */
    function toDateTime(secs) {
        const t = new Date(Date.UTC(1970, 0, 1)); // Epoch
        t.setUTCSeconds(secs);
        return t;
    }
    let normalDate = new Date(seconds * 1000).toLocaleString('es-MX',{timeZone:'America/Santiago'})

    function ItemOnlyPrice(item){ 
        return item.price.fullPrice * item.count 
      }
    

  return (
    <>
    <Container sx={{pt: '10vh'}}>
        <Paper>
            <Typography align='center' sx={{pt: '5px', pb:'5px', fontSize:'25px'}}>Detalles de compra: #{id}</Typography>
            <Divider/>
            <Container sx={{display: 'flex'}}>
                <Box align='center' sx={{display: 'flex', flexDirection: 'column', width: '33.333%'}}>
                    <Typography sx={{fontSize: '20px'}}>Informacion del comprador: </Typography>
                    <Box  sx={{display: 'flex', justifyContent: 'center'}}>
                        <Typography sx={{pr: '10px'}}>{purchase.buyer.name}</Typography>
                        <Typography>{purchase.buyer.lastName}</Typography>
                    </Box>
                    <Typography>{purchase.buyer.document}</Typography>
                </Box>
                <Box align='center'  sx={{width: '33.333%'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <Typography sx={{fontSize: '20px'}}>Contacto: </Typography>
                        <Typography>{purchase.phoneBuyer}</Typography>
                        <Typography>{purchase.buyer.email}</Typography> 
                    </Box>
                </Box>
                <Box align='center'  sx={{width: '33.333%'}}>
                    <Typography sx={{fontSize: '20px'}}>Hora de la compra: </Typography>
                    <Typography>{normalDate}</Typography>
                </Box>
            </Container>
                <Divider/>
            {purchase.items.map((item)=>
            <Container key={item.name}sx={{pt: 2, pb: 2}}>
            <Box sx={{display: 'flex', justifyContent: 'space-around'}} >
              <Box>
                <img src={item.img} alt={item.name} width='128px' height='128px'/>
              </Box>
              <Box sx={{paddingLeft: '15px', width: '75%',display: 'flex', alignItems: 'center'}}>
                <Box sx={{display: 'flex', alignItems: 'center', width: '100%'}}>
                  <Box sx={{width: '45%'}}>
                    <Typography sx={{fontSize: '20px', fontWeight: '600', }}variant="h5" className='cartItem_NameItem'>
                      {item.name}
                    </Typography>
                    <Box sx={{display: 'flex'}}>
                        <Typography sx={{pr: '5px'}}>Cantidad: </Typography>
                        <Typography>{item.count}</Typography>
                    </Box>
                    <Box sx={{display: 'flex'}}>
                        <Typography sx={{pr: '5px'}}>Total de este objeto: </Typography>
                        <Typography>{ItemOnlyPrice(item).toFixed(2)}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
            )}
            <Divider/>
            <Box sx={{pt:'10px', pl: '60px', display: 'flex', alignItems: 'center'}}>
                <Typography sx={{fontSize: '25px'}}>Total:</Typography>
                <Typography sx={{fontSize: '20px', pl: '10px'}}>{purchase.totalUSD.toFixed(2)}</Typography>
            </Box>
        </Paper>
    </Container>
    </>
  )
}

export default OrderAccount