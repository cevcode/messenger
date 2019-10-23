import React, { useState } from 'react';
import { Formik, FormikProps } from 'formik';
import { Box } from 'ui/Box';
import { Title } from 'ui/Title';
import { Description } from 'ui/Description';
import { Button } from 'ui/Button';
import {
    ButtonColorTypes,
    ColorTypes,
    ComponentSizesTypes,
    FontSizeTypes,
    PositionTypes,
    WeightTypes,
} from 'helpers/enums';
import { Field } from 'widgets/Fields';
import { SignupSchema } from 'validations';
import config from './config.json';

interface IAuthFields {
    icon: string;
    type: string;
    placeholder: string;
    name: string;
}

interface IRenderFields {
    fields: IAuthFields[];
}

const RenderFields: React.FC<IRenderFields> = ({ fields }): any => {
    return fields.map(item => {
        const { icon, type, placeholder, name } = item;
        return (
            <Field
                icon={icon}
                color={ColorTypes.blue}
                type={type}
                placeholder={placeholder}
                marginTop="20px"
                name={name}
            />
        );
    });
};

const Auth = () => {
    const [authType, setAuthType] = useState('signIn');
    const onSubmit = (values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
    };
    return config[authType].map(data => (
        <Box padding="40px" width="450px">
            <Formik
                initialValues={{ email: '', password: '', login: '' }}
                validationSchema={SignupSchema}
                onSubmit={(values, actions) => onSubmit(values, actions)}
                render={(props: FormikProps<any>) => {
                    const { title, description, fields } = data;
                    return (
                        <form onSubmit={props.handleSubmit}>
                            <Title fontSize={FontSizeTypes.l} weight={WeightTypes.w500} position={PositionTypes.center}>
                                {title}
                            </Title>
                            <Description margin="10px 0 60px 0" position={PositionTypes.center} color={ColorTypes.grey}>
                                {description}
                            </Description>
                            <RenderFields fields={fields} />
                            <Button
                                marginTop="40px"
                                componentSize={ComponentSizesTypes.full}
                                onClick={props.handleSubmit}
                            >
                                Войти
                            </Button>
                            <Button
                                marginTop="20px"
                                buttonColor={ButtonColorTypes.fill}
                                componentSize={ComponentSizesTypes.full}
                                onClick={props.handleSubmit}
                            >
                                Зарегистрироваться
                            </Button>
                        </form>
                    );
                }}
            />
        </Box>
    ));
};

export { Auth };
