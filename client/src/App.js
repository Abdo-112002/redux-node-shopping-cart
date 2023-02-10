

import React from "react";
import styled from "styled-components";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { StyledMinSection } from "./components/min-content/MinContent.style";
// import {AnimatedBtn, FancyButton, StyledButton, SubmitBtn} from "./components/button";

const Container = styled.div`
  width: 90%;
  margin: auto;
`;
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
        <Container>
            <StyledMinSection>
                <h1>hello</h1>
            </StyledMinSection>
        </Container>
        <Footer/>
    </MainContainer>
  );
}

export default App;
