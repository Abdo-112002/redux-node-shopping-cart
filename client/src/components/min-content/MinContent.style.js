

import styled from 'styled-components';

export const StyledMinSection = styled.section`
    grid-area: main;
    width: 90%;
    margin-inline: auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 20px;
    @media (max-width: 757px) {
        grid-template-columns: 1fr;
    }
`;


