import React, { useEffect, useState } from 'react';
import { CartBtn, CartDesc, CartOption, CartPrice, CartSizes, CartTitle } from '../cart/cart.style';
import StarRating from '../StarRating';
import { ModalCloseBtn, ModalContent, ModalImg, ModalInfo, ModalWrapper } from './modal.style';

function Modal({closeModal,product}) {
    console.log("modal");
    const [details,setDetails] = useState({});
    useEffect(() => {
        setDetails(product);
        return () => {
            setDetails({});
        }
    }, [product]);


  return (
    <ModalWrapper>
      <ModalContent>
            <ModalImg src={details?.imgUrl} alt={details?.title}/>
            <ModalInfo>
                <CartTitle>
                    {details?.title}
                </CartTitle>
                <CartDesc>
                    {details?.desc}
                </CartDesc>
                <CartDesc>
                    <StarRating rating={details?.rating}/>
                </CartDesc>
                <CartPrice>
                    ${details?.price}
                </CartPrice>
                <CartSizes>
                    <CartOption disabled>
                        select size
                    </CartOption>
                    {
                        details?.sizes?.length > 0 && details?.sizes?.map((item,index)=> (
                            <CartOption key={index}>
                                {item}
                            </CartOption>
                        ))
                    }
                </CartSizes>
                <CartBtn>
                    add to cart
                </CartBtn>
            </ModalInfo>
            <ModalCloseBtn onClick={()=>closeModal()}>+</ModalCloseBtn>
      </ModalContent>
    </ModalWrapper>
  )
}

export default Modal
