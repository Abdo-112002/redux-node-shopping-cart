
import React, { memo } from 'react';
import { CardImage, CartBtn, CartContent, CartDesc, CartItem, CartOption, CartPrice, CartSizes, CartTitle } from './cart.style';




function CartDesign({productDetailsModal,item , addToBasket}) {

    console.log("object");

    const {title,desc,price,imgUrl} = item;
    
  return (
    <CartItem>
      <CartContent>
        <CardImage src={imgUrl} onClick={()=> productDetailsModal(item)}/>
        <CartTitle>
            {title}
        </CartTitle>
        <CartDesc>
            {desc.slice(0,(desc.length * (10/100)))}
        </CartDesc>
        <CartPrice>
            ${price}
        </CartPrice>
        <CartBtn onClick={()=> addToBasket(item)}>
            add to cart
        </CartBtn>
      </CartContent>
    </CartItem>
  )
}

export default memo(CartDesign)
