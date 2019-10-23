import React from 'react';
import styled, { css } from 'styled-components';
import Ripples from 'react-ripples';
import { ButtonColorTypes, ComponentSizesTypes, ISpaceTypes } from 'helpers/enums';
import { buttonColor, componentSize, space, theme } from 'helpers/theme';

interface IButton extends ISpaceTypes {
    buttonColor?: ButtonColorTypes;
    componentSize?: ComponentSizesTypes;
    onClick: (...args: any) => void;
    disabled?: boolean;
}

const StyledButton = styled.button<IButton>`
    ${theme.fontSizes.default};
    ${theme.fonts.default};
    ${componentSize};
    cursor: pointer;
    ${buttonColor};
    display: flex;
    align-items: center;
    height: ${theme.globals.height};
    text-transform: uppercase;
    border: none;
    border-radius: 5px;
    justify-content: center;
    outline: none;
    :hover {
      filter: grayscale(0.2);
      transition: 0.4s ease;
    }
    ${props =>
        props.disabled &&
        css`
            background: ${theme.colors.grey};
            color: ${theme.colors.white};
        `}
`;

const StyledRipples = styled(Ripples)`
  width: 100%;
  ${space};
`;

const Button: React.FC<IButton> = ({ children, buttonColor, componentSize, onClick, disabled, ...props }) => {
    return (
        <StyledRipples {...props}>
            <StyledButton
                componentSize={componentSize}
                buttonColor={buttonColor}
                onClick={onClick}
                disabled={disabled}
            >
                {children}
            </StyledButton>
        </StyledRipples>
    );
};

export { Button };
