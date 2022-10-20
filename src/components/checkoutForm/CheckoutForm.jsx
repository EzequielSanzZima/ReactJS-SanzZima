import React, {useContext, useState} from 'react'
import { createOrder } from '../../services/firestore';
import { Paper, Container, Box, Button, Typography, TextField, Divider } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { serverTimestamp } from 'firebase/firestore'
import { cartCtx } from '../../context/CartContext';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ValidationGroup, Validate } from 'mui-validate';

function CheckoutForm() {
    const [dataForm, setDataForm] = useState({
        name: "", 
        lastName: "" ,
        phoneNumber: "", 
        email: "", 
        document: "",
    });

    const { cart, itemTotalPrice, clearCart} = useContext(cartCtx)
    const navigate = useNavigate()
    const MySwal = withReactContent(Swal)

    function handleCheckout(e){
        e.preventDefault();
        const orderData = {
            buyer: dataForm,
            items: cart,
            date: serverTimestamp(),
            totalUSD: itemTotalPrice(),
        };
        createOrder(orderData).then(orderID => {
            navigate('/')
            MySwal.fire({
                title: <strong>Gracias por tu compra!!</strong>,
                html: <i>Tu ID de compra es: {orderID}</i>,
                icon: 'success'
            })
            clearCart()
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
    <ValidationGroup>
    <Container sx={{pt: 5}}>
        <Box component='form' onSubmit={handleCheckout} sx={{display: 'flex', justifyContent: 'space-evenly'}}>
        <Paper sx={{pt: 3, width: '70%'}}>
            <Box sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' }, display: 'flex', flexDirection: 'column', alignItems: 'center'
            }}
            noValidate
            autoComplete="off">
                {/* //validate and for form name */}
                <Validate name="internal key 1" regex={[/^[a-zA-Z ]{2,30}$/, 'Ingresa bien tu nombre.']}>
                <TextField
                    value={dataForm.name}
                    onChange={inputChangeHandler}
                    label="Nombre"
                    name="name"
                    type="text"
                    placeholder="Nombre"
                    required
                />
                </Validate>
                {/* //Validate and form for lastName */}
                <Validate name="internal key 2" regex={[/^[a-zA-Z ]{2,30}$/, 'Ingresa bien tu apellido.']}>
                <TextField
                    required
                    id="outlined-required"
                    label="Apellido"
                    defaultValue={dataForm.lastName}
                    onChange={inputChangeHandler}
                    name="lastName"
                />
                </Validate>
                {/* //Validate and form for phone */}
                <Validate name="internal key 3" regex={[/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/, 'Ingrese tu numero correctamente.']}>
                <TextField
                    required
                    id="outlined-required"
                    label="Numero de contacto"
                    defaultValue={dataForm.phoneNumber}
                    onChange={inputChangeHandler}
                    type="number"
                    name="phoneNumber"
                />
                </Validate>
                <Validate name="internal key 4" regex={[/^\d{0,7}$/, 'Ingresa bien tu DNI. (Sin puntos)']}>
                <TextField
                    required
                    id="outlined-required"
                    label="Documento"
                    defaultValue={dataForm.document}
                    onChange={inputChangeHandler}
                    type="number"
                    name="document"
                />
                </Validate>
                <Validate name="internal key 5" regex={[/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 'Ingrese tu correo electronico']}>
                <TextField
                    required
                    id="outlined-required"
                    label="Correo electronico"
                    defaultValue={dataForm.email}
                    onChange={inputChangeHandler}
                    name="email"
                />
                </Validate>
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
    </ValidationGroup>
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