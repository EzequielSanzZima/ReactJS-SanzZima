import React, {useState, useEffect} from 'react'
import { getSingleItem, getElementByID } from '../../services/firestore'
import { useParams } from "react-router-dom";
import CircularIndeterminate from '../Cards/Charging';
import Checkout from './Checkout'


function CheckoutContainer() {
  const [item, allItem] = useState({});
  const [error, setError] = useState(false);
  const [Loading, IsLoading] = useState(true);
  const { id } = useParams();
  
  // useEffect(() => {
  //   getSingleItem(id, 'products')
  //     .then((dataResponse) => allItem(dataResponse))
  //     .catch((errormsg) => {
  //       setError(errormsg.message);
  //     })
  //     .finally(() => IsLoading(false));
  // }, [id]);

  useEffect(()=>{
    getElementByID(id, 'orders').then((data)=>{
      const filtereData = data
      allItem(filtereData)
      IsLoading(false)
    })
  })


      if (Loading) {
          return (
            <>
              {error ? (
                <p>Error</p>
              ) : (
                <CircularIndeterminate/>
              )}
            </>
          );
        }
  return <>
    <Checkout item={item}/>
    </>
}

export default CheckoutContainer