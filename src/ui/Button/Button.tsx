import React from 'react';
import styled, { css } from 'styled-components';
import { ButtonColorTypes, ButtonSizeTypes } from '../../helpers/enums';
import { theme, space, buttonColor, buttonSize } from '../../helpers/theme';

const StyledButton = styled.button<IButton>`
    ${buttonSize};
    ${buttonColor};
    ${space};
    display: flex;
    align-items: center;
    font-size: 16px;
    height: 44px;
    text-transform: uppercase;
    border: none;
    border-radius: 5px;
    justify-content: center;
    outline: none;
    ${(props) =>
        props.disabled &&
        css`
            background: ${theme.colors.grey};
            color: ${theme.colors.white};
        `}
`;

interface IButton {
    buttonColor: ButtonColorTypes;
    buttonSize: ButtonSizeTypes;
    onClick: (...args: any) => void;
    disabled?: boolean;
}

const Button: React.FC<IButton> = ({ children, buttonColor, buttonSize, onClick, disabled, ...props }) => {
    return (
        <StyledButton buttonColor={buttonColor} buttonSize={buttonSize} onClick={onClick} disabled={disabled} {...props}>
            {children}
        </StyledButton>
    );
};

export { Button };
