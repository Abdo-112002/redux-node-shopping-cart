

import styled from "styled-components";
import { CartBtn } from "../shopping/cart.style";

export const BasketWrapper = styled.div`
    grid-area: basket;
    width: 70%;
    margin: 50px auto;
    padding: 10px;
    @media (max-width: 757px) {
        width: 100%;
    }
`;

export const CartItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
`;
export const CartItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap : wrap;
    padding: 10px;
    border-bottom: 1px solid #e8e8e8;
    &:last-child{ 
        border: none;
    }
`;

export const CartInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;
`;

export const CartInfo = styled.div`
    font-size: 18px;
    text-transform: capitalize;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: self-start;
`;

export const CartRemoveBtn = styled(CartBtn)`
    background-color: #fff;
    color: red;
    border: 1px solid red;
    border-radius: 5px;
`;



