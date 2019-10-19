import React from 'react';
import styled from 'styled-components';
import { ButtonColorTypes, ButtonSizeTypes } from '../../helpers/enums';
import { theme } from '../../helpers/theme';

const size = (props: IButton) => {
    return theme.buttonSizes[props.size];
};

const color = (props: IButton) => {
    return theme.buttonColors[props.color];
};

const space = (props: any) => ({
    margin: props.margin || '',
    marginBottom: props.marginBottom || '',
    marginTop: props.marginTop || '',
    marginLeft: props.marginLeft || '',
    marginRight: props.marginRight || '',
    padding: props.padding || '',
    paddingBottom: props.paddingBottom || '',
    paddingTop: props.paddingTop || '',
    paddingLeft: props.paddingLeft || '',
    paddingRight: props.paddingRight || '',
});

const StyledButton = styled.button`
    ${size};
    ${color};
    display: flex;
    align-items: center;
    font-size: 16px;
    height: 44px;
    text-transform: uppercase;
    border: none;
    border-radius: 5px;
    justify-content: center;
    outline: none;
    ${space}
`;

interface IButton {
    color: ButtonColorTypes;
    size: ButtonSizeTypes;
    onClick: (...args: any) => void;
}

const Button: React.FC<IButton> = ({ children, color, size, onClick, ...props }) => {
    return (
        <StyledButton color={color} size={size} onClick={onClick} {...props}>
            {children}
        </StyledButton>
    );
};

export { Button };
