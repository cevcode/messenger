import * as React from 'react';
import MaskedInput from 'react-text-mask';
import { MaskTypes } from './helpers';
import { ComponentSizesTypes, InputTypes, ISpaceTypes } from 'helpers/enums';
import styled, { css } from 'styled-components';
import { componentSize, space, theme } from 'helpers/theme';

const StyledInput = styled.input<IInput>`
    ${componentSize};
    ${space};
    ${theme.fontSizes.default};
    height: ${theme.globals.height};
    width: 100%;
    border: 1px solid ${theme.colors.blue};
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
`;

interface IInput extends ISpaceTypes {
    value: any;
    componentSize: ComponentSizesTypes;
    mask?: MaskTypes;
    onBlur?: () => void;
    onClick?: () => void;
    onFocus?: () => void;
    onChange?: (e: any) => void;
    disabled?: boolean;
    className?: string;
    placeholder: string;
    type: InputTypes;
    name: string;
    id: string;
    autoComplete?: string;
    onEnterPress: () => void;
}

const Input: React.FC<IInput> = ({
    value,
    mask,
    onBlur,
    onClick,
    onFocus,
    onChange,
    disabled,
    componentSize,
    placeholder,
    type,
    name,
    id,
    autoComplete,
    onEnterPress,
    ...props
}) => {
    const _handleKeyPress = (e: { key: string }) => {
        if (e.key === 'Enter') {
            onEnterPress();
        }
    };
    if (mask) {
        return (
            <MaskedInput
                guide
                onEnterPress={_handleKeyPress}
                type={type}
                name={name}
                // @ts-ignore
                mask={MaskTypes[mask]}
                value={value}
                onBlur={onBlur}
                onClick={onClick}
                onFocus={onFocus}
                id={id}
                autoComplete={autoComplete}
                disabled={disabled}
                placeholder={placeholder}
                placeholderChar={'\u2000'}
                onChange={onChange}
            />
        );
    }
    return (
        <StyledInput
            componentSize={componentSize}
            type={type}
            id={id}
            name={name}
            value={value}
            onBlur={onBlur}
            onClick={onClick}
            onFocus={onFocus}
            onEnterPress={onEnterPress}
            disabled={disabled}
            autoComplete={autoComplete}
            placeholder={placeholder}
            onChange={onChange}
            {...props}
        />
    );
};

export { Input };
