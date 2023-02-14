

import styled from "styled-components";
import { CartTitle } from "../cart/cart.style";

export const FilterWrapper = styled.div`
    padding: 50px 0;
    position: relative;
`;

export const FilterContent = styled.div`
    background-color: #ddd;
    padding: 10px;
    border-radius: 5px;
    position: sticky;
    top: 0;
    left: 0;
`;

export const FilterTitle = styled(CartTitle)`
    color: black;
    font-weight: bold;
    margin: 15px 0;
`;

export const FilterTypesContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    margin: 7px 0;
`;

export const InputLabel = styled.label.attrs(({name})=> ({
    htmlFor : name,
}))`
    color: #2a5ea5;
`;

export const FilterType = styled.input.attrs(({inputType,name})=> ({
    type : inputType,
    name : name,
}))`
    font-size: 20px;
    accent-color:#2a5ea5;
    cursor: pointer;
`;

