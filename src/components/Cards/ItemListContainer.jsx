import * as React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ItemList } from './Items/ItemList';
import { products } from './Items/products'
import { Fetch } from './Items/products';
import CircularIndeterminate from './Charging'
import Container from '@mui/material/Container'


function ItemListContainer(){
  const [item, allItem] = useState([])
  const [charging, setCharging] = useState(true)
  const { category } = useParams()

  useEffect(() => {
    setCharging(true)
    Fetch(products)
      .then(data => {
        if (category) {
          setCharging(false)
          allItem(data.filter(products => products.category === category))
        } else {
          setCharging(false)
          allItem(data)
        }
      })
    }, [category])
    
return (<>
  {!charging ?<Container sx={{display: 'flex', flexWrap: 'wrap'}}><ItemList items={item}/></Container> : <CircularIndeterminate/>}
  </>);
}
export default ItemListContainer;