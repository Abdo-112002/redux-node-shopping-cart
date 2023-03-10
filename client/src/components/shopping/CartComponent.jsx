import React, { useCallback, useEffect, useState } from 'react';
import data from '../../db.json';
import Modal from '../modal/Modal';
import { CartWrapper } from './cart.style';
import CartDesign from './CartDesign';


function CartComponent({addToBasket}) {
  const [ProductsData , setData] = useState([]);
  const [openModal , setOpenModal] = useState({
    open : false,
    details : {},
  });

  useEffect(() => {
      setData(data);
  }, []);

  // const filterByCategory = (category) => {
    
  // }
  
  const openDetailsModal = useCallback((data) => {
    setOpenModal({open : true ,details : {...data} });
  },[]);

  const closeModal = () => {
    setOpenModal({...openModal , open : false});
  }
  

  return (
      <CartWrapper>
          {
            ProductsData?.length > 0 &&
            ProductsData?.map((item)=> (
              <CartDesign addToBasket={addToBasket} productDetailsModal={openDetailsModal} item={item} key={item.id}/>
            ))
          }

          {
            openModal?.open &&   <Modal closeModal={closeModal} product={openModal?.details}/>
          }
      </CartWrapper>
  )
}

export default CartComponent
