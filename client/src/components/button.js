

import styled, { keyframes , css} from "styled-components";

const StyledButton = styled.button`
  all: unset;
  padding: 10px 15px;
  color: ${({variant})=> variant === 'outline' ? 'green' : '#fff'};
  background-color: ${({variant})=> variant === 'outline' ? '#fff' : 'green' };
  cursor: pointer;
  border: 2px solid green;
  font-weight : bold;
  text-transform: capitalize;
  font-family: sans-serif;
  transition: 300ms ease-in-out;
  position: relative;
  overflow: hidden;
  &:hover {
    transform: scale(1.1);
    color: ${({variant})=> variant !== 'outline' ? 'green' : '#fff'};
    background-color: ${({variant})=> variant !== 'outline' ? '#fff' : 'green' };
    &::before {
        left: 100%;
    }
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: -100%;
    width: 10px;
    height: 100%;
    background-color: #eee;
    opacity: .5;
    /* z-index: 1; */
    transform: skewX(-35deg);
  }

  ${({type}) => css`
        ${()=> type === 'error' && `background-color: red;`}
  `}
`;



const FancyButton = styled(StyledButton)`
    background-image: linear-gradient(to right , green, orange 70% );
    border: none;
    transition: 300ms ease-in-out;
    display: inline-block;
    color: var(--min-color);
`;

const popupAnimation = keyframes`
    0%,100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
`

const AnimatedBtn = styled(FancyButton)`
    animation: ${popupAnimation} 1s ease-in-out infinite;
    &::before {
          all: unset;
    }
    &:hover {
        animation-play-state: paused;
    }
`;

const SubmitBtn = styled(StyledButton).attrs((prop)=> ({
    type : 'submit',
    'data-target' :  prop.dataId , 
}))`
    &::before {
        all: unset;
    }
    color: var(--min-color);
    ${({dataId})=> dataId && css`
        border: 4px solid orange;
        border-radius: 3px;
    `}
`;


export { StyledButton, FancyButton, SubmitBtn, AnimatedBtn };

