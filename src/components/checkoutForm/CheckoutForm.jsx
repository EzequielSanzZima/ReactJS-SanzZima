import React, {useContext, useState} from 'react'
import { createOrder } from '../../services/firestore';
import { Paper, Container, Box, Button, Typography, TextField, Divider } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { serverTimestamp } from 'firebase/firestore'
import { cartCtx } from '../../context/CartContext';

function CheckoutForm() {
    const [dataForm, setDataForm] = useState({
        name: "", 
        lastName: "" ,
        phoneNumber: "", 
        email: "", 
        document: "",
    });

    const { cart, itemTotalPrice} = useContext(cartCtx)
    const navigate = useNavigate()

    function handleCheckout(e){
        e.preventDefault();
        const orderData = {
            buyer: dataForm,
            items: cart,
            date: serverTimestamp(),
            totalUSD: itemTotalPrice(),
        };
        createOrder(orderData).then(orderID => {
            navigate(`/checkout/${orderID}`)
        });
    }
    function inputChangeHandler(event) {
        let inputName = event.target.name;
        let value = event.target.value;
    
        const newDataForm = { ...dataForm };
        newDataForm[inputName] = value;
        setDataForm(newDataForm);
    } 
    

    if(cart.length > 0){
    return (<>
    <Container sx={{pt: 5}}>
        <Box component='form' onSubmit={handleCheckout} sx={{display: 'flex', justifyContent: 'space-evenly'}}>
        <Paper sx={{pt: 3, width: '70%'}}>
            <Box sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' }, display: 'flex', flexDirection: 'column', alignItems: 'center'
            }}
            noValidate
            autoComplete="off">
                <TextField
                    value={dataForm.name}
                    onChange={inputChangeHandler}
                    label="Nombre"
                    name="name"
                    type="text"
                    placeholder="Nombre"
                    required
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Apellido"
                    defaultValue={dataForm.lastName}
                    onChange={inputChangeHandler}
                    name="lastName"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Numero"
                    defaultValue={dataForm.phoneNumber}
                    onChange={inputChangeHandler}
                    name="phoneNumber"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Documento"
                    defaultValue={dataForm.document}
                    onChange={inputChangeHandler}
                    name="document"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Correo electronico"
                    defaultValue={dataForm.email}
                    onChange={inputChangeHandler}
                    name="email"
                />
            </Box>
        </Paper>
        <Paper sx={{width: '25%', height: '70%'}}>
            <p>Detalles de tu compra</p>
            <Divider/>
            Total: {itemTotalPrice().toFixed(2)} 
            <Box>
                <Button type='submit'>Pagar</Button>
            </Box>
        </Paper>
        </Box>
    </Container>
    </>)
      } 
    return (
        <Container sx={{pt: '60px'}} className='emptyCheckOut'>
        <Paper elevation={2}>
            <Box sx={{height: '78vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography sx={{fontSize: '32px', fontWeight: 'inherit', color: '#666', marginBottom: 0}}>
                    No hay nada para hacer el checkout
                </Typography>
               <Box sx={{pt: 2}}>
                <Link to='/' className='empty_CheckOut text-link' >
                    <Button variant="contained" className='emptyCart_button'>Volver al inicio</Button>
                </Link>
               </Box>
              </Box>
            </Box>
        </Paper>
      </Container>
    )
}

export default CheckoutForm