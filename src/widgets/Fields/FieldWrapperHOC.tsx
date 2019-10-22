import React from 'react';
import { Column } from 'ui/Layout';
import { Description } from 'ui/Description';
import { ColorTypes, FontSizeTypes, ISpaceTypes } from 'helpers/enums';

export interface IFieldWrapperHOC extends ISpaceTypes {
    color?: ColorTypes;
    Component: React.ElementType<any>;
    label?: string | false;
    field?: any;
    error?: string | null;
    type: string;
    placeholder?: string | number;
    icon?: string;
    name: string;
}

interface IRenderComponent extends IFieldWrapperHOC {}

const RenderComponent: React.FC<IRenderComponent> = ({ Component, name, ...props }) => {
    return <Component name={name} {...props} />;
};
// @ts-ignore
const FieldWrapperHOC: React.FC<IFieldWrapperHOC> = ({
    Component,
    color,
    icon,
    label,
    type,
    placeholder,
    name,
    error,
    ...props
}) => {
    if (!Component) {
        console.warn('FieldWrapperHOC: no component pasted');
        return <Description>FieldWrapperHOC: no component pasted</Description>;
    }
    return (
        <Column>
            {label && (
                <Description fontSize={FontSizeTypes.default} margin="10px 0">
                    {label}
                </Description>
            )}
            <RenderComponent
                Component={Component}
                icon={icon}
                color={color}
                placeholder={placeholder}
                name={name}
                type={type}
                {...props}
            />
            {error && (
                <Description marginTop="10px" fontSize={FontSizeTypes.default} color={ColorTypes.red}>
                    {error}
                </Description>
            )}
        </Column>
    );
};

export { FieldWrapperHOC };
