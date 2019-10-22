import React from 'react';
import { useField } from 'formik';
import { FieldWrapperHOC } from 'widgets/Fields/FieldWrapperHOC';
import { Input } from 'ui/Input';
import { Description } from 'ui/Description';

const getComponentByType = type => {
    switch (type) {
        default:
        case 'email':
        case 'text':
        case 'password':
            return Input;
        case 'select':
            // TODO add new fields
            return Description;
    }
};

const Field = ({ label, Component, type, ...props }) => {
    const [field, meta] = useField(props.name);
    const error = meta.touch && meta.error ? meta.error : '';
    return <FieldWrapperHOC Component={getComponentByType(type)} label={label} error={error} {...field} {...props} />;
};

export { Field };
