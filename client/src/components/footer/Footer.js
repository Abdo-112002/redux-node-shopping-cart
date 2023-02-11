

import React from 'react';
import { StyledFooter ,FooterCopyRight } from './footer.style';
import { staticWords } from '../../staticWords';
function Footer() {
  return (
    <StyledFooter>
        <FooterCopyRight>
        &copy; {staticWords.footer}
        </FooterCopyRight>
    </StyledFooter>
  )
}

export default Footer
