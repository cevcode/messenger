import React from 'react';
import styled, { css } from 'styled-components';
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
    ${componentSize};
    ${buttonColor};
    ${space};
    display: flex;
    align-items: center;
    height: ${theme.globals.height};
    text-transform: uppercase;
    border: none;
    border-radius: 5px;
    justify-content: center;
    outline: none;
    ${props =>
    props.disabled &&
    css`
            background: ${theme.colors.grey};
            color: ${theme.colors.white};
        `}
`;

const Button: React.FC<IButton> = ({ children, buttonColor, componentSize, onClick, disabled, ...props }) => {
    return (
        <StyledButton
            componentSize={componentSize}
            buttonColor={buttonColor}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </StyledButton>
    );
};

export { Button };
