

import React , {useState} from "react";
import styled from "styled-components";
import Basket from "./components/basket/Basket";
import FilterProducts from "./components/filter/FilterProducts";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { StyledMinSection } from "./components/min-content/MinContent.style";
import CartComponent from "./components/shopping/CartComponent";
// import {AnimatedBtn, FancyButton, StyledButton, SubmitBtn} from "./components/button";

// const Container = styled.div`
//   width: 90%;
//   margin: auto;
//   border: 1px solid red;
// `;
const MainContainer = styled.div`
    display: grid;
    grid-template-areas: "header" "main" "basket" "footer";
    grid-template-rows: auto 1fr 1fr auto;
    height: 100%;
`;

function App() {
  const [basketItems , setBasket] = useState([]);

  function addToBasket(product) {
    let isExist = false;
    let basketColone = [...basketItems];

    basketColone.forEach(item => {
      if(item.id === product.id){
        isExist = true;
        item.qty++;
        return setBasket(basketColone);
      }
    });
    if(!isExist){
      return setBasket([...basketColone , {...product , qty : 1}])
    }
  }

  function removeFromBasket(id){
    setBasket((arr) => {
      return arr.filter((item) => {
        return item.id !== id;
      });
    });
  }

  return (
    <MainContainer>
        <Header/>
        <StyledMinSection>
            <FilterProducts/>
            <CartComponent addToBasket={addToBasket} />
        </StyledMinSection>
        <Basket basketItems={basketItems} removeFromBasket={removeFromBasket}/>
        <Footer/>
    </MainContainer>
  );
}

export default App;
