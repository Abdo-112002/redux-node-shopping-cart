
import React from 'react';
import { CardImage, CartDesc, CartTitle } from '../shopping/cart.style';
import {
    BasketWrapper, CartInfo, CartInfoWrapper, CartItem, CartItems, CartRemoveBtn,
} from './basket.style';

function Basket({basketItems , removeFromBasket}) {
  return (
    <BasketWrapper>
        <CartTitle>
            {
                basketItems.length 
                ? basketItems.length === 1 ? `${basketItems.length} item in your cart` : `${basketItems.length} items in your cart`
                : 'your cart is empty'
            }
        </CartTitle>
        <hr/>
        <CartItems>
            {
                basketItems.length > 0 && basketItems?.map((item)=> (
                    <CartItem key={item.id}>
                        <CartInfoWrapper>
                            <CardImage src={item.imgUrl} imgDisplay={'order'}/>
                            <CartInfo>
                                <CartDesc>title: {item.title}</CartDesc>
                                <CartDesc>quantity :{item.qty}</CartDesc>
                                <CartDesc>price: ${item.price}</CartDesc>
                            </CartInfo>
                        </CartInfoWrapper>
                        <div>
                            <CartRemoveBtn onClick={()=> removeFromBasket(item.id)}>remove</CartRemoveBtn>
                        </div>
                    </CartItem>
                ))
            }
        </CartItems>
    </BasketWrapper>
  )
}

export default Basket