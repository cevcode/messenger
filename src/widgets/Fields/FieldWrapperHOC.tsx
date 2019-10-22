import React from 'react';
import { Column } from 'ui/Layout';
import { Description } from 'ui/Description';
import { ColorTypes, FontSizeTypes } from 'helpers/enums';

interface IFieldWrapperHOC {
    Component?: React.ElementType<any>;
    label?: string | false;
    props?: any;
    field?: any;
    error?: string;
}

interface IRenderComponent {
    Component: React.ElementType<any>;
    onChange?: () => void;
    value?: string;
    props?: any;
    name: string;
}

const RenderComponent: React.FC<IRenderComponent> = ({ Component, onChange, value, name, ...props }) => {
    return <Component onChange={onChange} value={value} name={name} {...props} />;
};
// @ts-ignore
const FieldWrapperHOC: React.FC<IFieldWrapperHOC> = ({ Component, error, label, name, ...props }) => {
    if (!Component) {
        console.warn('FieldWrapperHOC: no component pasted');
        return <Description>FieldWrapperHOC: no component pasted</Description>;
    }
    return (
        <Column>
            {label && <Description fontSize={FontSizeTypes.default} margin="10px 0">{label}</Description>}
            <RenderComponent Component={Component} name={name} {...props} />
            {error && <Description fontSize={FontSizeTypes.default} margin="10px 0" color={ColorTypes.red}>{error}</Description>}
        </Column>
    )
};

export { FieldWrapperHOC };
