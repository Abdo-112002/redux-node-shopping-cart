import React,{useState,useEffect} from 'react'
import { CartWrapper } from './cart.style'
import CartDesign from './CartDesign';
import data from '../../db.json';

function CartComponent() {
  const [ProductsData , setData] = useState();

  useEffect(() => {
    setData(data);
  }, []);

  return (
      <CartWrapper>
          {
            ProductsData?.length > 0 &&
            ProductsData?.map((item)=> (
              <CartDesign  item={item} key={item.id}/>
            ))
          }
          
      </CartWrapper>
  )
}

export default CartComponent
