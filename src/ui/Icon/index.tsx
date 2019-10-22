import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from 'helpers/theme';
import { ColorTypes } from 'helpers/enums';

const StyledIcon = styled.i<any>`
  font-family: 'Material', sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: ${props => props.size ? props.size : '24px'};
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;
  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;
  /* Support for IE. */
  font-feature-settings: 'liga';
  color: ${props => props.color};
  ${props =>
    props.wrapped &&
    css`
            height: 100%;
            width: 44px;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        `}
`;

interface IIcon {
    size?: string;
    name: string;
    color?: ColorTypes;
    wrapped?: boolean;
}
const Icon: React.FC<IIcon> = ({ name, size, color, wrapped }) => {
    return <StyledIcon size={size} color={color} wrapped={wrapped}>{name}</StyledIcon>;
};

export { Icon };
