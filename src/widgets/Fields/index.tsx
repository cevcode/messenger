import React from 'react';
import { useField } from 'formik';
import { FieldWrapperHOC } from 'widgets/Fields/FieldWrapperHOC';
import { Input } from 'ui/Input';
import { Description } from 'ui/Description';
import { ColorTypes, ISpaceTypes } from 'helpers/enums';

const getComponentByType = (type: string) => {
    switch (type) {
        default:
        case 'email':
        case 'text':
        case 'password':
        case 'search':
            return Input;
        case 'select':
            // TODO add new fields
            return Description;
    }
};

export interface IField extends ISpaceTypes {
    color?: ColorTypes;
    label?: string | false;
    field?: any;
    error?: string | null;
    type: string;
    placeholder?: string | number;
    icon?: string;
    name: string;
}

function fieldStateColor(color, error, valid){
    if(error) {
        return ColorTypes.red;
    }
    if(valid) {
        return ColorTypes.green;
    }
    return color;
}

const Field: React.FC<IField> = ({ icon, color, label, type, placeholder, name, ...props }) => {
    const [field, meta] = useField(name);
    const { touch, error } = meta;
    const errorMessage = touch && error ? error : null;
    const valid = touch && !error;
    return (
        <FieldWrapperHOC
            icon={icon}
            color={fieldStateColor(color, errorMessage, valid)}
            label={label}
            type={type}
            placeholder={placeholder}
            name={name}
            Component={getComponentByType(type)}
            error={errorMessage}
            {...props}
            {...field}
        />
    );
};

export { Field };
