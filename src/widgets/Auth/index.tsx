import React from 'react';
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
import { SigninSchema, SignupSchema } from 'validations';
import config from './config.json';
import { History } from 'history';

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
                key={name}
                icon={icon}
                color={ColorTypes.blue}
                type={type}
                placeholder={placeholder}
                mtop="20px"
                name={name}
            />
        );
    });
};

function getButtonText(authType: string) {
    const textArr = ['Войти', 'Зарегистрироваться'];
    if(authType === 'signUp') {
        return textArr.reverse();
    }
    return textArr;
}

interface IAuth {
    authType: 'signIn' | 'signOut';
    history: History
}

const Auth: React.FC<IAuth> = ({ authType, history }) => {
    const onSubmit = (values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
    };

    const handleAuthType = authType => {
        if(authType === 'signIn') {
            return history.push('/register');
        }
        return history.push('/login');
    };

    return config[authType].map((data, i) => (
        <Box padding="40px" width="450px" key={i}>
            <Formik
                initialValues={{ email: '', password: '', login: '', repeatPassword: '' }}
                validationSchema={authType === 'signIn' ? SigninSchema : SignupSchema}
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
                                type="submit"
                                mtop="40px"
                                componentSize={ComponentSizesTypes.full}
                                onClick={props.handleSubmit}
                            >
                                {getButtonText(authType)[0]}
                            </Button>
                            <Button
                                type="button"
                                mtop="20px"
                                buttonColor={ButtonColorTypes.fill}
                                componentSize={ComponentSizesTypes.full}
                                onClick={() => handleAuthType(authType)}
                            >
                                {getButtonText(authType)[1]}
                            </Button>
                        </form>
                    );
                }}
            />
        </Box>
    ));
};

export { Auth };
