import * as React from 'react';
import { useEffect, useState } from 'react';

import CircularIndeterminate from '../Cards/Charging'
import { Container, Typography, Paper, Box, Divider} from '@mui/material'
import { getItems } from '../../services/firestore'
import { Link } from 'react-router-dom'

function ViewOrders() {
    const [buy, setBuy] = useState([])
    const [isLoading, setLoading] = useState(true)
  
    useEffect(() => {
        getItems("orders").then((data) => {
            setBuy(data)
            setLoading(false)
        })
    }, [])
      
    if (isLoading) {
        return (
            <CircularIndeterminate/>
        )
    }

  return (<>
         <Container sx={{pt: '25vh'}}>
            <Paper>
                <Typography align='center' sx={{pb: '10px', pt: '10px'}} >Aqui podrás ver los IDs de tus compras en nuestra web!</Typography>
            <Divider/>
            <Box>
                {buy.map((ele, id) => 
                <Container className='purchasesId' key={id} sx={{pt:'10px', pb: '10px'}}>
                    <Link to={ele.id}>
                        # {ele.id}
                    </Link>
                </Container>)}
            </Box>
            </Paper>
        </Container>
    </>);
  }

export default ViewOrders