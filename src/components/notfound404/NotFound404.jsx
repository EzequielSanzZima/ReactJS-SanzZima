import React, { useEffect } from 'react'
import { Container, Paper, Box, Typography, Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

function NotFound404() {
  const navigate = useNavigate()

  
  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 10000)
  })

  return (
    <Container sx={{pt: '25vh'}}>
      <Paper>
        <Box>
          <Typography align='center' variant='h1' sx={{fontSize: '4rem', letterSpacing: '0.00938em', color: 'inherit', pt: '50px', pb: '25px'}}>
            Te perdiste?
          </Typography>
          <Box align='center' sx={{}}>
            <Typography sx={{fontSize: '1.3rem'}}>
              La página requerida no existe. Te llevara automáticamente al comienzo en 10 segundos.
            </Typography>
            <Typography sx={{fontSize: '1.3rem'}}>
            O presiona el botón de abajo para ir al inicio.
            </Typography>
          </Box>
          <Box align='center' sx={{pt: '15px', pb: '25px'}}>
            <Link to='/' className='text-link'>
              <Button variant="contained">
                Volver
              </Button>
            </Link>
          </Box>
          
        </Box>
      </Paper>
    </Container>
  )
}

export default NotFound404