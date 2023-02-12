

import styled from "styled-components";

export const ModalWrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalContent = styled.div`
    width: 500px;
    min-width: 40%;
    max-width: 90%;
    min-height: 500px;
    background-color: #fff;
    padding: 20px;
    border-radius: 15px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;

export const ModalImg = styled.img`
    flex-basis: 100%;
    width: 100%;
    min-height: 300px;
    max-height: 400px;
    object-fit: contain;
`;

export const ModalInfo = styled.div`
    flex-basis: 100%;
    padding-left: 10px;
`;

export const ModalCloseBtn = styled.span`
    position: absolute;
    top: 40px;
    right: 40px;
    font-size: 50px;
    transform: rotate(45deg);
    cursor: pointer;
    color:  #2a5ea5;
`;