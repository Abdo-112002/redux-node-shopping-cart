

import styled , {css} from "styled-components";


const CartWrapper = styled.section`
    padding: 50px 0;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 20px;
`;


const CartItem = styled.div`
    flex: 0 1 calc((100% / 3) - 20px);
    align-self: normal;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #ddd;
    @media (max-width: 858px) {
        flex: 0 1 calc((100% / 2) - 20px);
    }
    @media (max-width: 575px) {
        flex: 0 1 calc((100% / 1) - 0px);
    }
`;

const CartContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    height: 100%;
`

const CardImage = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 2px;
  max-height: 250px;
  object-fit: cover;
  ${({imgDisplay})=> css`
    ${()=> imgDisplay === 'order' && `
        width: 80px;
        height: 80px;
    `}
  `}
`;

const CartTitle = styled.h3`
    font-size: 20px;
    font-weight: 500;
    text-transform: capitalize;
    color: #2a5ea5;
    margin: 5px 0px;
`;

const CartDesc = styled.p`
    font-size: 16px;
    color: gray;
    text-align: center;
    margin: 5px 0px;
`;

const CartPrice = styled.strong`
    font-size: 16px;
    color: #2a5ea5;
    font-weight: bold;
    margin: 5px 0px;
`;

const CartSizes = styled.select`
    width: 100%;
    padding: 5px;
    border: none;
    outline: none;
    border: 2px solid #ddd;
    border-radius: 2px;
`;
const CartOption = styled.option`
    font-size: 16px;
    color: #2a5ea5;
    text-transform: capitalize;
    transition: 300ms ease-in-out;
    &:hover {
        background-color: #ddd;
    }
`;

const CartBtn = styled.button`
    font-size: 16px;
    color: #2a5ea5;
    text-transform: capitalize;
    transition: 300ms ease-in-out;
    align-self: flex-start;
    padding: 5px 10px;
    outline: none;
    border: none;
    cursor: pointer;
    margin: 5px 0px;
    &:hover {
        background-color: #ddd;
    }
`;


export {
    CartItem ,
    CartContent,
    CardImage ,
    CartTitle , 
    CartDesc ,
    CartPrice,
    CartSizes ,
    CartOption,
    CartWrapper,
    CartBtn,
};