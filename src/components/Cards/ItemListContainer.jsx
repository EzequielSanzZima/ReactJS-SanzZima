import * as React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ItemList } from './Items/ItemList';
import CircularIndeterminate from './Charging'
import Container from '@mui/material/Container'

import { getItems, getItemsByCategory } from '../../services/firestore'

function ItemListContainer(){
  const [item, allItem] = useState([])
  const [isLoading, setLoading] = useState(true)
  const { category } = useParams()

  useEffect(()=>{
    setLoading(true);
    if (category === undefined){
      getItems()
        .then((dataResponse) => allItem(dataResponse))
        .finally(()=> setLoading(false))
    }else{
      getItemsByCategory(category).then((dataResponseFilter) => allItem(dataResponseFilter))
      .finally(()=> setLoading(false))
    }
  },[category])
    

return (<>
  {!isLoading ?<Container sx={{display: 'flex', flexWrap: 'wrap'}}><ItemList items={item}/></Container> : <CircularIndeterminate/>}
  </>);
}
export default ItemListContainer;