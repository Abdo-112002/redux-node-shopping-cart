

import React from "react";
import styled from "styled-components";
import CartComponent from "./components/cart/CartComponent";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { StyledMinSection } from "./components/min-content/MinContent.style";
// import {AnimatedBtn, FancyButton, StyledButton, SubmitBtn} from "./components/button";

// const Container = styled.div`
//   width: 90%;
//   margin: auto;
//   border: 1px solid red;
// `;
const MainContainer = styled.div`
    display: grid;
    grid-template-areas: "header" "main" "footer";
    grid-template-rows: auto 1fr auto;
    height: 100%;
`;

function App() {
  return (
    <MainContainer>
        <Header/>
        <StyledMinSection>
            <div>
              
            </div>
            <CartComponent/>
        </StyledMinSection>
        <Footer/>
    </MainContainer>
  );
}

export default App;
