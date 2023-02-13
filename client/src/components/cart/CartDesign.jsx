
import React , {memo } from 'react';
import { CardImage, CartBtn, CartContent, CartDesc, CartItem, CartOption, CartPrice, CartSizes, CartTitle } from './cart.style';



function CartDesign({productDetailsModal,item}) {

    console.log("object");

    const {title,desc,price,imgUrl,sizes} = item;
    
  return (
    <CartItem onClick={()=> productDetailsModal(item)}>
      <CartContent>
        <CardImage src={imgUrl}/>
        <CartTitle>
            {title}
        </CartTitle>
        <CartDesc>
            {desc.slice(0,(desc.length * (10/100)))}
        </CartDesc>
        <CartPrice>
            ${price}
        </CartPrice>
        <CartBtn>
            add to cart
        </CartBtn>
      </CartContent>
    </CartItem>
  )
}

export default memo(CartDesign)
