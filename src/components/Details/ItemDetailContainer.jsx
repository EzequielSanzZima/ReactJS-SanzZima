import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { SingleItem } from '../Cards/Items/products'
import ItemDetail from './ItemDetail'
import CircularIndeterminate from '../Cards/Charging'
import Container from '@mui/material/Container'

function ItemDetailContainer() {
    const [item, oneItem] = useState({})
    const [charging, setCharging] = useState(false)
    const { id } = useParams()
    
    useEffect(() =>{
        SingleItem(id).then((data) =>{
            setCharging(true)
            oneItem(data)
        })
        
    },[id])

  return <>
        
    {!charging && <CircularIndeterminate/>}
    {charging && <Container sx={{display: 'flex', flexWrap: 'wrap'}}> <ItemDetail item={item}/> </Container>}
    </>
}

export default ItemDetailContainer