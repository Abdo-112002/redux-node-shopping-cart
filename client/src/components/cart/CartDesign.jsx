
import React , {useMemo} from 'react';
import { CardImage, CartBtn, CartContent, CartDesc, CartItem, CartPrice, CartTitle } from './cart.style';



function CartDesign({item}) {
    
    const {title,desc,price,imgUrl} = useMemo(() => {
        console.log("object")
        return item;
    }, [item]);
    
  return (
    <CartItem>
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

export default CartDesign
