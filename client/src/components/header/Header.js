
import React from 'react'
import { StyledHeader, StyledLogo } from './header.style'
import { staticWords } from '../../staticWords';

function Header() {
  return (
    <StyledHeader>
        <StyledLogo>
           {staticWords.logoName}
        </StyledLogo>
    </StyledHeader>
  )
}

export default Header
