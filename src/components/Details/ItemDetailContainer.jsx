import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail'
import CircularIndeterminate from '../Cards/Charging'
import Container from '@mui/material/Container'
import { getSingleItem } from '../../services/firestore'


function ItemDetailContainer() {
    const [item, allItem] = useState({});
    const [Loading, IsLoading] = useState(true);
    const { id } = useParams();
    
    useEffect(()=>{
      getSingleItem(id).then((data)=>{
        const filteredData = data
        allItem(filteredData)
        IsLoading(false)
      })
    })



    if (Loading) {
        return (
          <>            
            <CircularIndeterminate/>            
          </>
        );
      }
  return <>
    <Container sx={{display: 'flex', flexWrap: 'wrap'}}> <ItemDetail item={item}/> </Container>
    </>
}

export default ItemDetailContainer