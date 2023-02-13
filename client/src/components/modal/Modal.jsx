import React,{useState , useEffect} from 'react'
import { CartBtn, CartDesc, CartOption, CartPrice, CartSizes, CartTitle } from '../cart/cart.style';
import { ModalCloseBtn, ModalContent, ModalImg, ModalInfo, ModalWrapper } from './modal.style'

import {AiOutlineStar,AiFillStar} from 'react-icons/ai';
import {BsStarHalf} from 'react-icons/bs';


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
                   c
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
