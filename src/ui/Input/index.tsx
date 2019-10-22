import * as React from 'react';
import MaskedInput from 'react-text-mask';
import { MaskTypes } from './helpers';
import { ColorTypes, ComponentSizesTypes, InputTypes, ISpaceTypes } from 'helpers/enums';
import styled, { css } from 'styled-components';
import { componentSize, space, theme } from 'helpers/theme';
import { Icon } from 'ui/Icon';

const StyledField = styled.div`
    position: relative;
    ${space};
    width: 100%;
`;

const StyledInput = styled.input<IInput>`
    ${componentSize};
    ${theme.fonts.default};
    ${theme.fontSizes.default};
    height: ${theme.globals.height};
    width: 100%;
    border-radius: 5px;
    border: 1px solid ${props => props.color};
    padding: 0 20px;
    box-sizing: border-box;
    outline: 0;

    ::placeholder {
        color: ${theme.colors.grey};
    }
    
    ${props =>
        props.disabled &&
        css`
            background: ${theme.colors.grey};
            color: ${theme.colors.white};
        `}
        ${props =>
        props.icon &&
        css`
            padding-left: 44px;
        `}
`;

interface IInput extends ISpaceTypes {
    value: any;
    componentSize?: ComponentSizesTypes;
    mask?: MaskTypes;
    onBlur?: () => void;
    onFocus?: () => void;
    onFieldChange?: (e: any) => void;
    disabled?: boolean;
    className?: string;
    placeholder: string;
    type: InputTypes;
    name: string;
    id: string;
    autoComplete?: string;
    icon?: string;
    color: ColorTypes;
}

function getIcon(icon, color) {
    if (icon) {
        return <Icon name={icon} color={color} wrapped />;
    }
    return null;
}

const Input: React.FC<IInput> = ({
    value,
    mask,
    onBlur,
    onFocus,
    onFieldChange,
    disabled,
    componentSize,
    placeholder,
    type,
    name,
    id,
    autoComplete,
    icon,
    color,
    ...props
}) => {
    if (mask) {
        return (
            <MaskedInput
                guide
                type={type}
                name={name}
                // @ts-ignore
                mask={MaskTypes[mask]}
                value={value}
                onBlur={onBlur}
                onFocus={onFocus}
                id={id}
                autoComplete={autoComplete}
                disabled={disabled}
                placeholder={placeholder}
                placeholderChar={'\u2000'}
                onChange={onFieldChange}
            />
        );
    }
    return (
        <StyledField {...props}>
            {getIcon(icon, color)}
            <StyledInput
                icon={icon}
                componentSize={componentSize}
                type={type}
                id={id}
                color={color}
                name={name}
                value={value}
                onBlur={onBlur}
                onFocus={onFocus}
                disabled={disabled}
                autoComplete={autoComplete}
                placeholder={placeholder}
                onChange={() => onFieldChange}
                {...props}
            />
        </StyledField>
    );
};

export { Input };
