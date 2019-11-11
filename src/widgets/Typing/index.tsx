import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from 'helpers/theme';

const animate = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

const StyledTyping = styled.div`
    padding: 0 10px;
    span {
        height: 8px;
        width: 8px;
        border-radius: 50%;
        background: ${theme.colors.white};
        display: inline-block;
        margin-right: 8px;
        animation-name: ${animate};
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-duration: 0.5s;
        &:nth-child(2) {
            animation-duration: 0.6s;
        }
        &:nth-child(3) {
            animation-duration: 0.7s;
            margin-right: 0;
        }
    }
`;

const Typing = () => {
    return (
        <StyledTyping>
            <span />
            <span />
            <span />
        </StyledTyping>
    );
};

export { Typing };
