import React, { useEffect, useState , useCallback} from 'react';
import data from '../../db.json';
import Modal from '../modal/Modal';
import { CartWrapper } from './cart.style';
import CartDesign from './CartDesign';


function CartComponent() {
  const [ProductsData , setData] = useState();
  const [openModal , setOpenModal] = useState({
    open : false,
    details : {},
  });

  useEffect(() => {
    setData(data);
  }, []);

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
              <CartDesign productDetailsModal={openDetailsModal} item={item} key={item.id}/>
            ))
          }

          {
            openModal?.open &&   <Modal closeModal={closeModal} product={openModal?.details}/>
          }
      </CartWrapper>
  )
}

export default CartComponent
